const mongoose = require('mongoose');

const RepSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true

    },
    link:{
        type:String,
        required: false
    },
    date:{
        type: String,
        required:true,
    },
    comments: {
        type:String,
        required:false
    }

})

module.exports = mongoose.model('Rep', RepSchema);