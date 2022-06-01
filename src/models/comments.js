const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    // comment:{
    // type: String,
    // required: [true, 'Please enter a comment'],
    // lowercase: true
    // },
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
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})
    if (user){
        const auth = await bcrypt.compare(password, user.password)
        if (auth){
            return user
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

const User = mongoose.model('user', userSchema)

module.exports = User