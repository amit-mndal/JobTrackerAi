const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getJobs, createJob, getJob, updateJob, deleteJob, getStats
} = require('../controllers/jobController');

router.use(protect); // all job routes are protected

router.get('/stats', getStats);
router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJob).put(updateJob).delete(deleteJob);

module.exports = router;