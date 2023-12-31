const mongoose = require('mongoose');

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );
        console.log(`Mongo connected: ${conn.connection.host}`.cyan.bold)
}
module.exports = connectDB;