const Db = require('mongodb/lib/db');
const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    },
    subscriber:{
        type:Number,
        required : true
    }

})
a = mongoose.model('Alien',alienSchema)
module.exports = a;