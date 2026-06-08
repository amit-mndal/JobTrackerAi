// server/services/pdfService.js
const pdf = require('pdf-parse');

const extractTextFromPDF = async (buffer) => {
  try {
    const data = await pdf(buffer);  // ✅ call pdf() directly, not pdfParse()
    const text = data.text
      .replace(/\s+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    return text;
  } catch (err) {
    throw new Error('Failed to parse PDF: ' + err.message);
  }
};

module.exports = { extractTextFromPDF };