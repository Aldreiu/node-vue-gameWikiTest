module.exports = () => {
    return async (req, res, next) => {
        // 我们严格规定一下 模型就叫模型名 请求的时候请求他的复数形式
        // 这里使用 node一个工具 inflection 变成不是复数形式

        // 这里包含 与上级分类关联  还有不是所有地方需要进行 populate 下面判断
        // 根据判断模型名进行是否添加 populat
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        await next()
    }
}