const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    deadline: Date,
    reminder: {
        type: Boolean,
        required: false,
        default: false
    },
})



module.exports = mongoose.model('task', tasksSchema)