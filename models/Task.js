const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title:{
        type: String, 
        required: true,
        minLength: 1, 
        trim: true
    },
    _categoryId: {
        type: mongoose.Types.ObjectId,
        required: true
    }

})

module.exports = mongoose.model('Task', TaskSchema)

