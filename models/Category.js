const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    title:{
        type: String, 
        required: true,
        minLength: 1, 
        trim: true
    }

})

module.exports = mongoose.model('Category', CategorySchema)
