const express = require('express');
const router = express.Router();

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
router.get("/categories", async (req, res) => {
    const items = await Category.find().populate('parent').limit(10)
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



module.exports = router