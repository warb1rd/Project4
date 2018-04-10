const express = require('express');
const app = express();
const dotenv = require('dotenv').load();
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/resume-app'
const PORT = process.env.PORT || 3001;
const usersRoutes = require('./routes/users.js');
const resumesRoutes = require('./routes/resumes.js');


mongoose.connect(MONGODB_URI, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

// app.use(express.static(`${__dirname}/client/build`))											//This tells express where all static assets are stored (everything pertaining to front end)
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)
app.use("/api/resumes", resumesRoutes)

// app.use('*', (req, res) => {
// 	res.sendFile(`${__dirname}/client/build/index.html`)										//If you make a get request to anything else but /api/users and api/bars, send the index.html file.
// })

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})