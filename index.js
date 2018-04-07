const express = require('express');
const app = express();
const dotenv = require('dotenv').load();
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/react-express-jwt'
const PORT = process.env.PORT || 3001;
// const usersRoutes = require('./routes/users.js');

mongoose.connect(MONGODB_URI, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

// app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get("/api", (req, res) => {
	res.json({message: "API root."})
})

// app.use("/api/users", usersRoutes)

// app.use('*', (req, res) => {
// 	res.sendFile(`${__dirname}/client/build/index.html`)
// })

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
}) 