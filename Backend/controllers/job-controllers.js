const asyncHandler = require('express-async-handler')

const getAllContacts = asyncHandler((req,res)=>{
    res.json({message:'all jobs'})
})



const createNewJob = asyncHandler( async (req,res)=>{
    console.log('this is request',req.body);
    const {name,email} = req.body

    if(!name || !email){
        res.status(400)
        throw new Error("all feilds are mandatory")
    }

    res.status(201).json({message:'create new job'})
})



const getSingleJob = asyncHandler((req,res)=>{
    res.json({message:`get single job ${req.params.id}`})
})

const updateSingleJob = asyncHandler((req,res)=>{
    res.json({message:`update existing job for ${req.params.id}`})
})

const deleteSingleJob = asyncHandler((req,res)=>{
    res.json({message:`delete this job ${req.params.id}`})
})


module.exports = {
    getAllContacts,
    getSingleJob,
    createNewJob,
    updateSingleJob,
    deleteSingleJob
}