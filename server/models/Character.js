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
    },
    // 角色立绘
    drawing:{
        charactericon:{type:String}
    },
    // 技能
    skills:[{
        // 技能图标
        icon:{type:String},
        // 技能名称
        name:{type:String},
        // 技能介绍
        description:{type:String}

    }],
    // 控制是否有 最终上限这样才有 item5
    finalstart:{
        start:{type:Boolean}
    },
    // 突破上限材料1   这个库之后加
    items1:{

    },
    items2:{

    },
    items3:{

    },
    items4:{

    },
    items5:{

    },
    // 相关角色
    partners:[{
        // 只想本身拿角色头像
        character:{type:mongoose.Schema.Types.ObjectId,ref:'Character'}
    }]
})

module.exports = mongoose.model('Character', schema)