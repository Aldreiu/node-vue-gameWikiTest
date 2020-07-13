// 引入子路由
const post = require("./post")

// 向外暴露接口方法
module.exports = (app) =>{
    app.use("/admin/api",post)
}