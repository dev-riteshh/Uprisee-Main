const mongoose = require('mongoose')

const startupSchema = new mongoose.Schema({
    startupName:{
        type:String,
        required:true 
    },
    founderName:{ 
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    Postedjobs:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Job'
        }
    ]
})

module.exports = mongoose.model('startup',startupSchema)