const express = require('express');
const router = express.Router({
    mergeParams:true  // 保留父路由器的值
});

// 引入模型 category
const Category = require('../../models/Category')

const CategoryFather = require('../../models/CategoryFather')

// ========父级分类
router.post("/categoryFather", async (req, res) => {
    const model = await CategoryFather.create(req.body)
    res.send(model);
})

// 查看所有 父级分类
router.get("/categoryFather", async (req, res) => {
    const modelList = await CategoryFather.find().limit(10)
    res.send(modelList)
})
// 通过id查找对应的腹肌分类id
router.get("/categoryFather/:id", async (req, res) => {
    const model = await CategoryFather.findById(req.params.id)
    res.send(model)
})

// 根据id 并对腹肌分类进行编辑
router.put("/categoryFather/:id", async (req, res) => {
    const model = await CategoryFather.findByIdAndUpdate(req.params.id, req.body)
    res.send(model);
})

// 根据id 删除对应的父级分类
router.delete("/categoryFather/:id", async (req, res) => {
    await CategoryFather.findByIdAndDelete(req.params.id)
    res.send({
        message: "删除成功"
    })
})

// ==============

// 查看所有分类
// 这个例子能让多数接口能够复用
// 记得改掉 父子的app.use 这样就能操作父级的路由的值 设置为动态
// 我这里因为 有关联就懒得写了  这种在简单的数据库可以拿来复用 
router.get("/", async (req, res) => {
    // 因为请求是 复数形式 categories 怎么改成category 因为地址是 category
    // 使用包 inflection

    // 定义一个 查询项
    const queryOptions ={}
    // 模型上的属性 可以查到 modelName 他的模型名字
    if(req.Model.modelName ==='Ctegory'){
        queryOptions.populate='parent'
    }
   
    // 这里要把上级分类找出来 需要设置查询项
    const items = await req.Model.find().setOption(queryOptions).limit(10)
    res.send(items);
})

// 创建分类
router.post("/categories", async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model);
})

// 通过id查找对应的分类
router.get("/categories/:id", async (req, res) => {
    const model = await Category.findById(req.params.id).populate('parent')
    res.send(model);
})

// 通过id然后进行对修改
router.put("/categories/:id", async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body).populate('parent')
    res.send(model)
})

// 通过id然后进行删除
router.delete("/categories/:id", async (req, res) => {
    await Category.findByIdAndDelete(req.params.id)
    res.send({
        message: "删除成功"
    })
})

// app.use('/admin/api/rest/:resource',async (req,res,next)=>{
//     const modelName = require('inflection').classify(req.params.resource)
//      req.Model = require(`../../models/${modelName}`) //请对象上挂载model
// },router)


module.exports = router