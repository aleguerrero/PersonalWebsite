// initiates express 
const express = require('express');
const app = express();
app.listen(3000, () =>  {
    console.log('Server started at ${3000}');
});

// initiates database
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, () => console.log('Connected to DB!')); // process.env.DATABASE_URL

// Initiates routes
const experienceRoute = require('./routes/experiences');

app.use(express.json());
app.use('/api/experiences', experienceRoute);