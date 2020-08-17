const mongoose = require('mongoose');

const CategoryFather = require('./FatherCategory')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CategoryFather
    }
})

// 虚拟是可以获取和设置的文档属性
schema.virtual('newsList',{
    ref:'Essay',
    foreignField:'categories',
    justOne:false,
    localField:'_id'
})

module.exports = mongoose.model('Category', schema)