const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
    header:{
        name: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String, required: true}
    },
    summary: {type: String, required: true}, 
    technical: {type: String, required: true},
    projects: [{
        title: {type: String, required: true},
        description: {type: String, required: true}
    }],
    experience: [{
        company: {type: String, required: true},
        jobTitle: {type: String, required: true},
        startDate: {type: Date, required: true}, 
        endDate: {type: Date, required: true},         
        details: {type: String, required: true}
    }],
    education: [{
        institution: {type: String, required: true},
        degree: {type: String, required: true},
        graduationDate: {type: Date, required: true}
    }],
    makePublic: Boolean,
    templateName: {type: String, required: true},
    
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}               //reference the user schema    
})

const Resume = mongoose.model("Resume", resumeSchema)
module.exports = Resume