const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    description: {type: String, required: true}
},{
    timestamps: true
})

const Comments = mongoose.model("Comment", commentSchema)

module.exports = Comments