const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const tasks = require('./routes/tasks');
const reps = require('./routes/reps')

const app = express();

app.use(express.json());

//mounting
app.use('/api/v1/tasks', tasks);
app.use('/api/v1/reps', reps);


const PORT=process.env.PORT || 5000

app.listen(PORT);