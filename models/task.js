const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    status: {
        type: String,
        required: false,
        default: 'Working on It'
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;