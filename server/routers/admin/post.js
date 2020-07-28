const express = require('express');
const jwt = require('jsonwebtoken')

const AdminUser = require('../../models/AdminUser');
const assert = require('http-assert');

const router = express.Router({
    mergeParams: true // 保留父级路由的值 与路由参数合并
});

// 引入模型 category
// const Category = require('../../models/Category')

// const FatherCategory = require('../../models/FatherCategory')

// ========父级分类
// router.post("/categoryFather", async (req, res) => {
//     const model = await CategoryFather.create(req.body)
//     res.send(model);
// })

// // 查看所有 父级分类
// router.get("/categoryFather", async (req, res) => {
//     const modelList = await CategoryFather.find().limit(10)
//     res.send(modelList)
// })
// // 通过id查找对应的腹肌分类id
// router.get("/categoryFather/:id", async (req, res) => {
//     const model = await CategoryFather.findById(req.params.id)
//     res.send(model)
// })

// // 根据id 并对腹肌分类进行编辑
// router.put("/categoryFather/:id", async (req, res) => {
//     const model = await CategoryFather.findByIdAndUpdate(req.params.id, req.body)
//     res.send(model);
// })

// // 根据id 删除对应的父级分类
// router.delete("/categoryFather/:id", async (req, res) => {
//     await CategoryFather.findByIdAndDelete(req.params.id)
//     res.send({
//         message: "删除成功"
//     })
// })

// ==============

// 查看所有分类
router.get("/", async (req, res) => {
    console.log(req.user);
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
        queryOptions.populate = 'parent'
    }

    // setOptions设置查询项
    // limit做分页
    // const items = await req.Model.find().setOptions(queryOptions).limit(10)
    const items = await req.Model.find().setOptions(queryOptions)

    res.send(items);
})

// 创建分类
router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model);
})

// 通过id查找对应的分类
router.get("/:id", async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
        queryOptions.populate = 'parent'
    } else if (req.Model.modelName === 'Character') {
        queryOptions.populate = 'attribute'
    }
    const model = await req.Model.findById(req.params.id).setOptions(queryOptions)
    res.send(model);
})

// 通过id然后进行对修改
router.put("/:id", async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
        queryOptions.populate = 'parent'
    }
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body).setOptions(queryOptions)
    res.send(model)
})

// 通过id然后进行删除
router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
        message: "删除成功"
    })
})




module.exports = router