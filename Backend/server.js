const dotenv = require('dotenv').config();
const cors = require('cors')
const express = require('express');
const cookieParser = require('cookie-parser')
const connectDb = require('./config/dbConnection');
const errorhandler = require('./middlewares/errorhandler');
const router = require('./routes/job');
const app = express()


connectDb()

const port = process.env.PORT ||  5000

app.use(express.json())
app.use(cookieParser())
app.use(router)
app.use(cors())
app.use(errorhandler)

app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`);
})