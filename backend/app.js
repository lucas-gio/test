const express = require('express');
const app = express();
const radiosRouter = require('./routes/radios');

// ...existing code...

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/radios', radiosRouter);

// ...existing code...

module.exports = app;
