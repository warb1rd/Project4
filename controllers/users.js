const User = require('../models/User.js');
const signToken = require('../serverAuth.js').signToken;

module.exports = {
    index: (req, res) => {
        User.find({}, (err, allUsers)=> {
            res.json(allUsers)
        })
    }, 

    show: (req, res) => {
        console.log("Current User:")
		console.log(req.user)
        User.findById(req.params.id, (err, user) => {
            res.json(user)
        })
    },

    create: (req, res) => {
		User.create(req.body, (err, user) => {
			if(err) return res.json({success: false})
			const token = signToken(user)
			res.json({success: true, message: "User created. Token attached"})
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