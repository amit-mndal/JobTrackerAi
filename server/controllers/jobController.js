const Job = require('../models/Job');

// GET /api/jobs — get all jobs for logged-in user
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/jobs — create new job
const createJob = async (req, res) => {
  try {
    const { company, role, status, jobDescription, jobUrl, location, salary, notes } = req.body;

    const job = await Job.create({
      user: req.user._id,
      company,
      role,
      status: status || 'wishlist',
      jobDescription,
      jobUrl,
      location,
      salary,
      notes
    });

    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/jobs/:id
const getJob = async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.id, user: req.user._id });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/jobs/:id — update job (including status for Kanban drag)
const updateJob = async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.id, user: req.user._id });
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const allowedFields = [
      'company', 'role', 'status', 'jobDescription', 'resumeText',
      'jobUrl', 'location', 'salary', 'notes', 'appliedDate', 'interviewDate',
      'aiScore', 'matchedSkills', 'missingSkills', 'aiVerdict',
      'rewrittenBullets', 'coverLetter'
    ];

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        job[field] = req.body[field];
      }
    });

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/jobs/:id
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/jobs/stats — for analytics dashboard
const getStats = async (req, res) => {
  try {
    const stats = await Job.aggregate([
      { $match: { user: req.user._id } },
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    const result = {
      wishlist: 0, applied: 0, interview: 0, offer: 0, rejected: 0
    };
    stats.forEach(s => { result[s._id] = s.count; });

    const totalAiScore = await Job.aggregate([
      { $match: { user: req.user._id, aiScore: { $ne: null } } },
      { $group: { _id: null, avg: { $avg: '$aiScore' } } }
    ]);

    result.avgAiScore = totalAiScore[0]?.avg?.toFixed(1) || 0;
    result.total = Object.values(result).reduce((a, b) => (typeof b === 'number' ? a + b : a), 0);

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getJobs, createJob, getJob, updateJob, deleteJob, getStats };