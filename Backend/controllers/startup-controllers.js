const asyncHandler = require('express-async-handler')
const startup = require('../models/startupModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { get } = require('../routes/job')
const { response } = require('express')

const JWT_Auth_KEY = 'Startup_User123'


// create new startup account

const signupStartup = asyncHandler(async(req,res)=>{
    const {startupName,founderName,email,password,website,location} = req.body
    
    
    let existingUser;
    try {
        existingUser = await startup.findOne({email})
    } catch (error) {
        console.log(error)
    }
    
    if(existingUser){
        return res.status(400).json({message:'user already Exist! log'})
    }
    const hashpassword = bcrypt.hashSync(password)
    
    const newStartup = await startup.create({
        email,
        password : hashpassword,
        startupName,
        founderName,
        website,
        location
    })


    res.status(200).json(newStartup)
})




// login startup

const loginStartup =asyncHandler( async (req,res)=>{
    const {email,password} = req.body

    let existingUser;
    try {
        existingUser = await startup.findOne({email})
    } catch (error) {
        console.log(error)
    }
    
    if(!existingUser){
        return res.status(404).json({message:'user not found!'})
    }

    const IsPasswordCorrect = bcrypt.compareSync(password,existingUser.password)
    
    if(!IsPasswordCorrect){
        res.json({message:'Invalid Password / Email'})
    }

    const token = jwt.sign({id:existingUser._id},JWT_Auth_KEY,{
        expiresIn: '30s'
    })

    res.cookie(String(existingUser._id),token,{
         path:'/',
         expires: new Date(Date.now() + 1000 * 30),
         httpOnly:true,
         sameSite:'lax'
    })

    return res.status(200).json({message:'sucessfully login',user : existingUser,token })
})




const verifyToken = (req,res,next) =>{
    const cookies = req.headers.cookie
    const token = cookies.split("=")[1] 
    console.log(cookies);

    if(!token){
        res.status(404).json({message:'no token found'})
    }
    jwt.verify(String(token),JWT_Auth_KEY,(err,user)=>{
        if(err){
            return res.status(400).json({message:'invalid token'})
        }
        console.log(user.id);
        req.id = user.id
    })

    next()
}

const getUser =  async (req,res,next)=>{
    const userId = req.id
    let user;
    try {
        user = await startup.findById(userId,'-password')
    } catch (error) {
        console.log(error)
    }
    if(!user){
        return res.json({message:'user not found'})
    }
    return res.status(200).json({user})
}



const getAllStatups = (async (req,res)=>{
    const allstartups = await startup.find();
    res.json(allstartups)
})


const UpdateStartup = asyncHandler( async (req,res)=>{
    const Findstartup = await startup.findById(req.params.id)

    if (!Findstartup){
        res.status(404)
        throw new Error('job not found')
    }

    const UpadateStartup = await startup.findByIdAndUpdate(
        {_id:Findstartup},
        {$push:{ Postedjobs: req.body.JobId}},
        {new:true}
    )

    res.json(UpadateStartup)
})




module.exports = {signupStartup,getAllStatups,loginStartup,verifyToken,getUser,UpdateStartup}