const User = require('../models/User.js');
const signToken = require('../serverAuth.js');

module.exports = {
    index: (req, res) => {
        User.find({}, (err, allUsers)=> {
            res.json(users)
        })
    }, 

    show: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            res.json(user)
        })
    },

    create: (req, res) => {
        User.create(req.body, (err, user) => {
            if(err) return res.json({success: false})
            const token = signToken(user)                       			// once user is created, generate a token to log in
        })
    }, 

    update: (req, res) => {
        User.findById(req.params.id, req.body, (err, user) => {
            Object.assign(user, req.body)
            user.save((err, updatedUser) => {
                res.json({success: true, message: "User updated", user: updatedUser})
            })
        })
    },

    destroy: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            res.json({success: true, message: "User deleted", user})
        })
    }, 

    authenticate: (req, res) => {
        User.findOne({email: req.body.email}, (err, user) => {
            if(!user || !user.validPassword(req.body.password)){
                return res.json({success: false, message: "Invalid credentials"})
            }
            const token = signToken(user)
            res.json({success: true, message: "Token attached"})
        })
    }
}