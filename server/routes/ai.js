const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { aiRateLimiter } = require('../middleware/rateLimiter');
const { analyzeJob, rewriteResumeBullets, generateCover, upload } = require('../controllers/aiController');

router.use(protect);
router.use(aiRateLimiter);

// Analyze: supports both text input and PDF file upload
router.post('/analyze', upload.single('resume'), analyzeJob);
router.post('/rewrite', rewriteResumeBullets);
router.post('/cover-letter', generateCover);

module.exports = router;