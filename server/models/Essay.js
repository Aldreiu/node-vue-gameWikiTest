const mongoose = require('mongoose');

const Category= require('./Category')

const schema = new mongoose.Schema({
    // 文章标题
    title: {
        type: String
    },
    // 分类选择
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    }],
    // 文章内容
    body:{
        type:String
    }
})

module.exports = mongoose.model('Essay', schema)