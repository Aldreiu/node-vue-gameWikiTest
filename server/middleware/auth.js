// 为了中间件的扩展性  返回出去一个函数代码
module.exports = () => { // 这里扩展性可以对 状态码 和 返回的message  进行查询的数据库  都可以  进行扩展

    const jwt = require('jsonwebtoken')
    const assert = require("http-assert")
    const AdminUser = require('../models/AdminUser');
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        // console.log(token);
        // token不能为空 不然报错 jwt malformed
        assert(token, 401, "jwt token 未授权")
        const tokenData = jwt.verify(token, req.app.get('secret'))
        assert(tokenData.id, 401, "无效 jwt token")
        req.user = await AdminUser.findById(tokenData.id)
        // console.log(req.user);
        // 需要对token  user 都要判断 还有id 需要频繁判断报错
        // 使用 http-assert
        // 401一般用于用户身份有关
        assert(req.user, 401, "请先登陆")
        await next();
    }
}