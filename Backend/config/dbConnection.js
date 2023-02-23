const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const connectDb = async ()=>{
    try {
        const connect = mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log('connected to db');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb