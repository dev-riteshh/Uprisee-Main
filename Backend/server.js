const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const connectDb = require('./config/dbConnection');
const errorhandler = require('./middlewares/errorhandler');
const router = require('./routes/job');
const app = express()


connectDb()

const port = process.env.PORT ||  5000

app.use(express.json())
app.use(router)
app.use(errorhandler)

app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`);
})