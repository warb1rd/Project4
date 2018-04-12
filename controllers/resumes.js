const express = require("express")
const Resume = require('../models/Resume.js');

module.exports = {
    index: (req, res) => {
        Resume.find().populate("user").exec((err, allResumes)=> {
            res.json(allResumes)
        })
    }, 

    show: (req, res) => {
		console.log(req.Resume)
        Resume.findById(req.params.id, (err, resume) => {
            res.json(resume)
        })
    },

    create: (req, res) => {
		Resume.create({...req.body, user: req.user}, (err, newresume) => {                                                                      //new resume will be created that includes all fields from form and a USER KEY which is the current user
            res.json({success: true, message: "new resume created ", resume: newresume})          //spread the body of the request in a new object that also includes the user
        })
	},

    update: (req, res) => {
        Resume.findById(req.params.id, (err, resume) => {
            console.log("RESUME:")
            console.log(resume)

            Object.assign(resume, req.body)
            resume.save((err, updatedResume) => {
                res.json({success: true, message: "Resume updated", Resume: updatedResume})
            })
        })
    },

    destroy: (req, res) => {
        Resume.findByIdAndRemove(req.params.id, (err, resume) => {
            res.json({success: true, message: "Resume deleted", resume})
        })
    }, 
}