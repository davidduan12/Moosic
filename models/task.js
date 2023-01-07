const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true

    },
    category:{
        type:String,
        required: true
    },
    day:{
        type: String,
        required:true,
    }

})

module.exports = mongoose.model('Task', TaskSchema);