// 数据库
module.exports = (app) =>{
    const mongoose = require('mongoose');
    mongoose.connect("mongodb://localhost/node-vue-gamewiki",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })
}