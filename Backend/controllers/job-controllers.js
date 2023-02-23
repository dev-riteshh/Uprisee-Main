const asyncHandler = require('express-async-handler')
const Job = require('../models/jobModel')

const getAllContacts = asyncHandler( async (req,res)=>{
    const Jobs = await Job.find();
    res.json(Jobs)
})


const createNewJob = asyncHandler( async (req,res)=>{
    const {jobTitle,jobDescription,salary,location,company} = req.body

    

    const newJob = await Job.create({
        jobTitle,
        jobDescription,
        salary,
        location,
        company,
    })



    res.status(201).json(newJob)
})



const getSingleJob = asyncHandler( async (req,res)=>{
    const singleJob = await Job.findById(req.params.id)
    if (!singleJob) {
        res.status(404)
        throw new Error('job not found')
    }
    res.json(singleJob)
})



const updateSingleJob = asyncHandler( async (req,res)=>{
    const Findjob = await Job.findById(req.params.id)
    if (!Findjob){
        res.status(404)
        throw new Error('job not found')
    }

    const updatedjob = await Job.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
    )
    res.json(updatedjob)
})




const deleteSingleJob = asyncHandler( async (req,res)=>{
    const job = await Job.findById(req.params.id)
    if (!job){
        res.status(404)
        throw new Error('job not found')
    }

    const deletedJob =await Job.deleteOne({id:job});
    res.json(deletedJob)
})


module.exports = {
    getAllContacts,
    getSingleJob,
    createNewJob,
    updateSingleJob,
    deleteSingleJob
}