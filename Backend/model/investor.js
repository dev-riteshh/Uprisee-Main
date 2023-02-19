const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  investmentStage: {
    type: String,
    required: true
  },
  investmentAmount: {
    type: Number,
    required: true
  },
  portfolio: [
    {
      companyName: {
        type: String,
        required: true
      },
      industry: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      investmentStage: {
        type: String,
        required: true
      },
      investmentAmount: {
        type: Number,
        required: true
      },
      investmentDate: {
        type: Date,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('Investor', investorSchema);
