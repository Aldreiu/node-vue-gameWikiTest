const mongoose = require('mongoose');

// 关联的model
// ---分类
const Category = require('../models/Category')
// ---材料
const Article = require('../models/Article')

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
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    }],
    // hp and attack
    hpandattack: {
        hp: {
            type: Number
        },
        attack: {
            type: Number
        }
    },
    // 属性
    attribute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    },
    // 种族
    race: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    },
    // 类型
    typechar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    },
    // other info 其他信息
    otherinfo: {
        // 日文名
        japanName: {
            type: String
        },
        // 英文名
        enName: {
            type: String
        },
        // 常用昵称 外号
        commentName: {
            type: String
        },
        // notepad 露莉亚笔记
        notepad: {
            type: String
        },
        // 年龄
        age: {
            type: String
        },
        // 身高
        height: {
            type: String
        },
        // 声优
        cv: {
            type: String
        },
        // 兴趣
        interest: {
            type: String
        },
        // 喜好
        hobby: {
            type: String
        },
        // 不擅长
        nogoodat: {
            type: String
        },
    },

    // 角色立绘
    drawing: {
        type: String
    },
    // 技能
    skills: [{
        // 技能图标
        icon: {
            type: String
        },
        // 技能名称
        name: {
            type: String
        },
        // 技能介绍
        description: {
            type: String
        },
        // 控制是 主动true  被动就false
        passive:{
            type:String
        }
        // 使用间隔  初期和多少级  想偷下懒日后在补 =，=

    }],
    // 控制是否有 最终上限这样才有 item5
    finalstart: {
        start: {
            type: Boolean
        }
    },
    // 突破上限材料1   这个库之后加
    items1: [{
            article: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: Article
            }],
            num: {
                type: Number
            }
        }

    ],
    items2: [{
            article: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: Article
            }],
            num: {
                type: Number
            }
        }

    ],
    items3: [{
            article: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: Article
            }],
            num: {
                type: Number
            }
        }

    ],
    items4: [{
            article: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: Article
            }],
            num: {
                type: Number
            }
        }

    ],
    items5: [{
            article: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: Article
            }],
            num: {
                type: Number
            }
        }

    ],
    // 相关角色
    // 只想本身拿角色头像
    character: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }]
})

module.exports = mongoose.model('Character', schema)