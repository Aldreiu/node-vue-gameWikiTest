const mongoose = require('mongoose');

const CategoryFather= require('./FatherCategory')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    parent:{type:mongoose.Schema.Types.ObjectId,ref:CategoryFather}
})

module.exports = mongoose.model('Category', schema)