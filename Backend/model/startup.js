const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StartupSchema = new Schema({
    StartupName: String, // name of the startup
    founder: String, // name of the founder
    email: String, // email of the startup
    password: String, // password of the startup
    industry: String, // industry of the startup
    description: String, // description of the startup
    location: {
      city: String,
      state: String,
      country: String
    }, // location of the startup
    website: String, // website of the startup
    employees: Number, // number of employees in the startup
    foundedYear: Number, // year the startup was founded
    funding: Number, // amount of funding the startup has received
    socialMedia: {
      twitter: String,
      linkedin: String,
      facebook: String,
      instagram: String
    } ,// social media handles of the startup
    proposal:{
        objectId : String,
        startupName: {
            type: String,
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
    }
  })

  module.exports = mongoose.model('Startup',StartupSchema)