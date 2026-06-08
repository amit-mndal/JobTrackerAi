const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Job role is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['wishlist', 'applied', 'interview', 'offer', 'rejected'],
    default: 'wishlist'
  },
  jobDescription: {
    type: String,
    default: ''
  },
  resumeText: {
    type: String,
    default: ''
  },
  // AI Results
  aiScore: {
    type: Number,
    min: 0,
    max: 100,
    default: null
  },
  matchedSkills: [String],
  missingSkills: [String],
  aiVerdict: {
    type: String,
    default: ''
  },
  rewrittenBullets: {
    type: String,
    default: ''
  },
  coverLetter: {
    type: String,
    default: ''
  },
  // Metadata
  jobUrl: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  salary: {
    type: String,
    default: ''
  },
  appliedDate: {
    type: Date,
    default: null
  },
  interviewDate: {
    type: Date,
    default: null
  },
  notes: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);