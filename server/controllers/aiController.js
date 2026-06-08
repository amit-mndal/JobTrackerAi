const multer = require('multer');
const { extractTextFromPDF } = require('../services/pdfService');
const { getMatchScore, rewriteBullets, generateCoverLetter } = require('../services/geminiService');
const Job = require('../models/Job');

// Multer: store file in memory (not disk)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  }
});

// POST /api/ai/analyze
// Accepts: resumeText (string) OR resume (PDF file) + jobId
const analyzeJob = async (req, res) => {
  try {
    const { jobId, resumeText: rawResumeText } = req.body;

    // Get job from DB
    const job = await Job.findOne({ _id: jobId, user: req.user._id });
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (!job.jobDescription) {
      return res.status(400).json({ message: 'Please add a job description first' });
    }

    // Determine resume text: from file upload OR from body OR from saved DB
    let resumeText = rawResumeText;

    if (req.file) {
      // PDF was uploaded
      resumeText = await extractTextFromPDF(req.file.buffer);
    }

    if (!resumeText && job.resumeText) {
      // Use previously saved resume text
      resumeText = job.resumeText;
    }

    if (!resumeText) {
      return res.status(400).json({ message: 'Please provide your resume text or upload a PDF' });
    }

    // Save resume text to job
    job.resumeText = resumeText;

    // Call Gemini for match score
    const scoreResult = await getMatchScore(resumeText, job.jobDescription);

    // Save AI results to DB
    job.aiScore = scoreResult.score;
    job.matchedSkills = scoreResult.matched_skills || [];
    job.missingSkills = scoreResult.missing_skills || [];
    job.aiVerdict = scoreResult.verdict || '';

    await job.save();

    res.json({
      score: job.aiScore,
      matchedSkills: job.matchedSkills,
      missingSkills: job.missingSkills,
      verdict: job.aiVerdict,
      resumeText: job.resumeText
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/ai/rewrite
const rewriteResumeBullets = async (req, res) => {
  try {
    const { jobId, bullets } = req.body;

    const job = await Job.findOne({ _id: jobId, user: req.user._id });
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (!bullets) return res.status(400).json({ message: 'Please provide resume bullets to rewrite' });
    if (!job.jobDescription) return res.status(400).json({ message: 'Job description is required' });

    const rewritten = await rewriteBullets(bullets, job.jobDescription);

    job.rewrittenBullets = rewritten;
    await job.save();

    res.json({ rewrittenBullets: rewritten });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/ai/cover-letter
const generateCover = async (req, res) => {
  try {
    const { jobId } = req.body;

    const job = await Job.findOne({ _id: jobId, user: req.user._id });
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (!job.resumeText) return res.status(400).json({ message: 'Please analyze your resume first' });
    if (!job.jobDescription) return res.status(400).json({ message: 'Job description is required' });

    const letter = await generateCoverLetter(
      req.user.name,
      job.role,
      job.company,
      job.resumeText,
      job.jobDescription
    );

    job.coverLetter = letter;
    await job.save();

    res.json({ coverLetter: letter });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { analyzeJob, rewriteResumeBullets, generateCover, upload };