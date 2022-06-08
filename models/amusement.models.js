const mongoose = require('mongoose')

const Schema = mongoose.Schema

const amusementSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    imageURL: {type: String, required: true }
},{
    timestamps: true
})

const Amuse = mongoose.model("Amuse", amusementSchema)

module.exports = Amuse