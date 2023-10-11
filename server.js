const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

const app = express();


app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
    extended:true
}))

dotenv.config({
    path: './config/config.env'
});

connectDB();



app.use('/api/todo/auth',require('./routes/user'))

const PORT = process.env.PORT || 3000;


app.listen(PORT,
     console.log(`running on port: ${PORT}`.red.underline.bold))