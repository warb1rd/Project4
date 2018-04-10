const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
    header:{
        name: String,
        email: String,
        phone: String
    },
    summary: String, 
    technical: [],
    projects: [{
        title: String,
        description: String
    }],
    experience: [{
        company: String,
        title: String,
        date: Date, 
        details: String
    }],
    education: [{
        institution: String,
        degree: String,
        date: Date
    }],
    makePublic: Boolean,
    
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}               //reference the user schema    
})

const Resume = mongoose.model("Resume", resumeSchema)
module.exports = Resume