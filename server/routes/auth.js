const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);   // ← NO middleware here, just the controller
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;