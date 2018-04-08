const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const userSchema = new mongoose.Schema({
    name: {type: String}, 
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true}
})

userSchema.methods.generateHash = function(password){                                   //Adds a method to a user object to create a hashed password
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

userSchema.methods.validPassword = function(password){                                  //Adds a method to a user document object to check if password is correct
   return bcrypt.compareSync(password, this.password)
}

userSchema.pre("save", function(next){                                                  //This is a MIDDLEWARE before saving, check if password was changed, and encrypt new password before saving:
    if(this.isModified("password")){
        this.password = this.generateHash(this.password)
    }
    next()
})

const User = mongoose.model("User", userSchema)
module.exports = User

