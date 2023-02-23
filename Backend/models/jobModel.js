const mongoose = require('mongoose')


const jobSchema = new mongoose.Schema({
    jobTitle:{
        type: String,
        required:true,
        trim:true 
    },
    jobDescription:{
        type: String,
        required:true,
        trim:true
    },
    salary:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true,
        trim:true
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'startup' 
    },
},
    {
        timestamps:true,
    }
)


module.exports = mongoose.model('Job',jobSchema)