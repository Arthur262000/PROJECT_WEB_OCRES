const mongoose = require('mongoose');

const UserSchema=mongoose.Schema({

    name: {

        type:String,

        required:true

    },

    surname:{

        type:String,

        required:true

    },

    username: {

        type: String,

        required:true

    },

    password: {

        type:String,

        required:true,

    }

})



module.exports = mongoose.model('Users',UserSchema);