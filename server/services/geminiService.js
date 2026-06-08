const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// Helper: clean JSON from markdown code blocks if Gemini wraps it
const cleanJSON = (text) => {
  return text
    .replace(/```json\n?/g, '')
    .replace(/```\n?/g, '')
    .trim();
};

// ── PROMPT 1: Match Score ──────────────────────────────────────────────────
const getMatchScore = async (resumeText, jobDescription) => {
  const prompt = `
You are an expert ATS (Applicant Tracking System) and career coach.

Analyze how well this resume matches the job description below.

RESUME:
${resumeText.substring(0, 4000)}

JOB DESCRIPTION:
${jobDescription.substring(0, 3000)}

Return ONLY a valid JSON object (no markdown, no extra text) in this exact format:
{
  "score": <number 0-100>,
  "matched_skills": ["skill1", "skill2", ...],
  "missing_skills": ["skill1", "skill2", ...],
  "verdict": "<2-3 sentence honest assessment of fit>"
}

Scoring guide:
- 80-100: Excellent match, apply immediately
- 60-79: Good match with some gaps
- 40-59: Moderate match, needs improvement
- 0-39: Poor match, significant gaps
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  try {
    return JSON.parse(cleanJSON(text));
  } catch (e) {
    // Fallback if JSON parse fails
    return {
      score: 50,
      matched_skills: [],
      missing_skills: [],
      verdict: text.substring(0, 300)
    };
  }
};

// ── PROMPT 2: Rewrite Resume Bullets ─────────────────────────────────────
const rewriteBullets = async (bullets, jobDescription) => {
  const prompt = `
You are an expert resume writer and career coach.

Rewrite these resume bullet points to better target the job description below.
Use strong action verbs, quantify achievements where possible, and naturally 
incorporate relevant keywords from the job description.

CURRENT BULLET POINTS:
${bullets.substring(0, 2000)}

JOB DESCRIPTION:
${jobDescription.substring(0, 2000)}

Return ONLY the rewritten bullet points, one per line, starting with •
Do not include any explanation or preamble.
`;

  const result = await model.generateContent(prompt);
  return result.response.text().trim();
};

// ── PROMPT 3: Cover Letter ────────────────────────────────────────────────
const generateCoverLetter = async (name, role, company, resumeText, jobDescription) => {
  const prompt = `
You are an expert cover letter writer.

Write a compelling, personalized cover letter for ${name} applying for the 
${role} position at ${company}.

The letter should:
- Be 3-4 paragraphs, professional but not stiff
- Open with a strong hook (not "I am writing to apply...")
- Reference 2-3 specific skills/experiences from the resume that match the JD
- Show genuine enthusiasm for the company/role
- End with a clear call to action

RESUME SUMMARY:
${resumeText.substring(0, 2000)}

JOB DESCRIPTION:
${jobDescription.substring(0, 2000)}

Write the cover letter directly (no subject line, no "Cover Letter:" header).
`;

  const result = await model.generateContent(prompt);
  return result.response.text().trim();
};

module.exports = { getMatchScore, rewriteBullets, generateCoverLetter };