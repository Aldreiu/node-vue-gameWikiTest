const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    // 角色名
    name: {
        type: String
    },
    // 角色头像
    avatar: {
        type: String
    },
    // 角色昵称
    title: {
        type: String
    },
    // 信息 通过分类进行添加 得意武器
    categories:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Category'}
    ],
    // hp and attack
    hpandattack:{
        hp:{type:Number},
        attack:{type:Number}
    },
    // 属性
    attribute:{
        type:mongoose.Schema.Types.ObjectId,ref:'Category'
    },
    // 种族
    race:{
        type:mongoose.Schema.Types.ObjectId,ref:'Category'
    }
})

module.exports = mongoose.model('Character', schema)