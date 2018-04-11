const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
    header:{
        name: String,
        email: String,
        phone: String
    },
    summary: String, 
    technical: String,
    projects: [{
        title: String,
        description: String
    }],
    experience: [{
        company: String,
        jobTitle: String,
        dateFrom: Date, 
        dateTo: Date,         
        details: String
    }],
    education: [{
        institution: String,
        degree: String,
        graduationDate: Date
    }],
    makePublic: Boolean,
    
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}               //reference the user schema    
})

const Resume = mongoose.model("Resume", resumeSchema)
module.exports = Resume