// 引入子路由
const post = require("./post")

// 向外暴露接口方法
// 设置中间件用来控制每次 需要用到的 model 模型来控制数据库   注意数据库的命名 因为限制的了写法 也可以不加 为了规范书写  为了让子路由能读取到 Model  让他存在req中  然后在子路由去拿
module.exports = (app) => {
    // 改成复用性 增删查改的 crud
    app.use("/admin/api/rest/:resource", async (req, res, next) => {
        // 我们严格规定一下 模型就叫模型名 请求的时候请求他的复数形式
        // 这里使用 node一个工具 inflection 变成不是复数形式

        // console.log(Model);
        // 这里包含 与上级分类关联  还有不是所有地方需要进行 populate 下面判断
        // 根据判断模型名进行是否添加 populat
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, post)


    const multer = require('multer')
    // 目标地址
    const upload = multer({dest:__dirname + '/../../uploads'})
    app.post('/admin/api/upLoad',upload.single('file'),async (req,res)=>{
        // express本身获取不了上传文件数据
        // 使用multer来处理上传文件
        const icon = req.file
        icon.url = `http://localhost:5000/uploads/${icon.filename}`
        res.send(icon)
    })
}