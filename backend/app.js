const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');
const catchAsyncErrors = require('./middlewares/catchAsyncErrors');

const dotenv = require('dotenv');

// Setting up config file
dotenv.config({ path: 'backend/config/config.env' })

app.use(express.json());

//Import all routes
const groceries = require('./routes/grocery');

app.use('/api/v1', groceries);

// Middleware to handle errors
app.use(errorMiddleware);
app.use(catchAsyncErrors);

module.exports = app;