const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

port = 8000

//temp middele ware
app.use('/',(req,res,next)=>{
    res.send('hello from server')
})


mongoose.connect('mongodb+srv://devriteshhh:R22.Mane@cluster0.7wgp5tm.mongodb.net/Uprisee?retryWrites=true&w=majority')
   .then(()=>{
    console.log('conned to db');
   })
   .then(  
       app.listen(port,(req,res)=>{
          console.log(`listing on port ${port}`)
       })
   ).catch((err)=>console.log(err))


