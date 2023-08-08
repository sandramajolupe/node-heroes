const mongoose = require('mongoose')

const Schema = mongoose.Schema
const HeroSchema = new Schema ({
    first_name: {
        type:String,
        require: true,
        maxLength:100
    },

    faction:{
        type:String,
        require: true,
        maxLength:100
    },

    hp:{
        type:Number,
        require: true,
        default:10
    }
    // date_of_birth: { type: Date },
    // date_of_death: { type: Date },
})

module.exports = mongoose.model('Hero', AuthorSchema)