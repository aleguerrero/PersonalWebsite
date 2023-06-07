// initiates express 
const express = require('express');
const app = express();
app.listen(3000, () =>  {
    console.log('Server started at ${3000}');
});

// initiates database
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, () => console.log('Connected to DB!')).catch(error => console.log(error)); // process.env.DATABASE_URL

// Initiates routes
const experienceRoute = require('./routes/Experience');
const technologyRoute = require('./routes/Technology');
const hobbyRoute = require('./routes/Hobby');

app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use('/api/experiences', experienceRoute);
app.use('/api/technologies', technologyRoute);
app.use('/api/hobbies', hobbyRoute);