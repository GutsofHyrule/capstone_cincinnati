const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    comment:{
    type: String,
    required: [true, 'Please enter a comment'],
    lowercase: true
    }
})