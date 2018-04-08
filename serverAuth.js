const jwt = require('jsonwebtoken');
const { JWT_KEY } = process.env
const User = require('./models/User.js');

function signToken(user) {                                                          //Function creates tokens
    const userData = user.toObject()                                                //Returns js object with info from database
    delete userData.password
    return jwt.sign(userData, JWT_KEY)
}

function verifyToken(req, res, next){
    const token = req.get("token") || req.body.token ||req.query.token              //This gets token from headers, body or query string
    
    if(!token) return res.json({success: false, message: "No token found" })        //If no token is found, deny access, else try verifying token
    jwt.verify(token, JWT_KEY, (err, decodedData) => {
        
        if(err) return res.json({success: false, message: "Invalid token" })
        User.findById(decodedData._id, (err, user) => {                             //Else, search for user by id embedded in token

            if(!user) return res.json({success:false, message: "Invalid token"})    //If no user is found, deny access
            req.user = user                                                         //Else, add user to req object
            next()
        })
    })
}

module.exports = {
    signToken, 
    verifyToken
}