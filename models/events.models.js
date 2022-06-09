const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    imageURL: {type: String, required: true }
},{
    timestamps: true
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event