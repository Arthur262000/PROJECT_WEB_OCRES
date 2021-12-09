const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema({

    name: {

        type:String,

        required:true

    },

    type: {

        type:String,

        required:true

    }



})



module.exports = mongoose.model('Film',FilmSchema);