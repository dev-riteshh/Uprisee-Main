const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StartupProposalSchema = new Schema({
  startupName: {
    type: Schema.Types.ObjectId,
    ref: 'startup',
    required: true,
  },
  founderName: {
    type: String,
    required: true,
  },
  companyWebsite: {
    type: String,
    required: true,
  },
  companyIndustry: {
    type: String,
    required: true,
  },
  companyLocation: {
    type: String,
    required: true,
  },
  companyDescription: {
    type: String,
    required: true,
  },
  targetFunding: {
    type: Number,
    required: true,
  },
  fundingPurpose: {
    type: String,
    required: true,
  },
  proposedValuation: {
    type: Number,
    required: true,
  },
  investor: {
    type: Schema.Types.ObjectId,
    ref: "Investor",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StartupProposal = mongoose.model(
  "StartupProposal",
  StartupProposalSchema
);
