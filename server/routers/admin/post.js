const express = require('express');
const router = express.Router();

// 引入模型 category
const Category = require('../../models/Category')

// 查看所有分类
router.get("/categories",async (req,res)=>{
    const items = await Category.find().limit(10) 
    res.send(items);
})

// 创建分类
router.post("/categories",async (req,res)=>{
    const model = await Category.create(req.body)
    res.send(model);
})



module.exports = router