// 引入子路由
const post = require("./post")

const jwt = require('jsonwebtoken')
const assert = require("http-assert")
const AdminUser = require('../../models/AdminUser');


// 中间件  判断用户是否登录验证token
const authMiddleware = require('../../middleware/auth')

// 资源中间件
const resourceMiddleware = require('../../middleware/resource')



// 向外暴露接口方法
// 设置中间件用来控制每次 需要用到的 model 模型来控制数据库   注意数据库的命名 因为限制的了写法 也可以不加 为了规范书写  为了让子路由能读取到 Model  让他存在req中  然后在子路由去拿
module.exports = (app) => {
    // 改成复用性 增删查改的 crud
    app.use("/admin/api/rest/:resource", authMiddleware(),resourceMiddleware(), post)


    const multer = require('multer')
    // 目标地址
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })
    app.post('/admin/api/upLoad', authMiddleware(), upload.single('file'), async (req, res) => {
        // express本身获取不了上传文件数据
        // 使用multer来处理上传文件
        const icon = req.file
        // 本地地址
        // icon.url = `http://localhost:5000/uploads/${icon.filename}`
        icon.url = `http://www.aldreiu.xyz/${icon.filename}` //线上地址

        res.send(icon)
    })

    // 登录
    app.post('/admin/api/login', async (req, res) => {
        const {
            username,
            password
        } = req.body
        // 根据用户名查找用户
        // const AdminUser = require('../../models/AdminUser');
        // 因为设置 不查密码  但是因为要校验密码 所以还需要查 所以这里需要设置  -是排除  +是强制选择
        const user = await AdminUser.findOne({
            username
        }).select('+password')
        assert(user, 422, "用户不存在")
        // 使用http-assert
        // if (!user) {
        //     return res.status(422).send({
        //         message: "用户名不存在"
        //     })
        // }

        // 校验密码
        // bcr自带的校验密码 同步
        const isValid = require('bcrypt').compareSync(password, user.password)
        // if (!isValid) {
        //     return res.status(422).send({
        //         message: '密码错误'
        //     })
        // }
        assert(isValid, 422, "密码错误")
        // 返回token

        const token = jwt.sign({
            id: user._id
        }, app.get('secret'))
        res.send({
            token,
            username: user.username
        });
    })

    // 错误处理
    app.use(async (err, req, res, next) => {
        console.log(err.message);
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}