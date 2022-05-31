const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    comment:{
    type: String,
    required: [true, 'Please enter a comment'],
    lowercase: true
    },
    email:{
        type: String,
        required: [true, 'Please put in your email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        minlength:[6, ' Minimum length is 6 characters']
    }
})

userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt()
    this.password = await bc
})