
const getAllContacts = (req,res)=>{
    res.json({message:'all jobs'})
}



const createNewJob = (req,res)=>{
    console.log('this is request',req.body);
    const {name,email} = req.body

    if(!name || !email){
        res.status(400)
        throw new Error("all feilds are mandatory")
    }

    res.json({message:'create new job'})
}



const getSingleJob = (req,res)=>{
    res.json({message:`get single job ${req.params.id}`})
}

const updateSingleJob = (req,res)=>{
    res.json({message:`update existing job for ${req.params.id}`})
}

const deleteSingleJob =(req,res)=>{
    res.json({message:`delete this job ${req.params.id}`})
}


module.exports = {
    getAllContacts,
    getSingleJob,
    createNewJob,
    updateSingleJob,
    deleteSingleJob
}