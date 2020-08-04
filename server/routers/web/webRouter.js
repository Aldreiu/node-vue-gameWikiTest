const router = require('express').Router()

// const mongoose = require('mongoose')
// const Category = mongoose.model('Category')
const Category = require('../../models/Category')
const FatherCategory = require('../../models/FatherCategory')

const Essay = require('../../models/Essay')

router.get('/news/init', async (req, res) => {
    const parent = await FatherCategory.findOne({
        name: "新闻分类"
    })
    // console.log(parent);
    const cats = await Category.find().where({
        parent: parent
    }).lean()
    const newsTitles = ["「グラブル宝箱チャンス！」開催のお知らせ", "サマーキャンペーン開催のお知らせ", "グラブルサマーギフトキャンペーン開催のお知らせ", "レジェンドフェス開催＆新キャラクター水着バージョン「アニラ」浴衣バージョン「ロザミア」「タイアー」紹介のお知らせ", "特別生放送のお知らせ", "イベント「わたしの愛しのアウギュステ」開催のお知らせ", "ネズ水着スキンセット販売のお知らせ", "グランデフェス開催＆新キャラクター水着バージョン「ルシオ」「アーミラ」紹介のお知らせ", "最終上限解放！「クリスティーナ」", "これからの「グランブルーファンタジー」2020年7月号"]
    const newsList = newsTitles.map(title => {
        const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
        return {
            categories: randomCats.slice(0, 2),
            title: title
        }
    })

    // await Essay.deleteMany({})
    // await Essay.insertMany(newsList)
    res.send(newsList)
})

router.get('/news/list',async (req,res) =>{
    const parent = await FatherCategory.findOne({
        name:'新闻分类'
    }).populate({
        path:'children',
        populate:{
            path:'newsList'
        }
    }).lean()
    console.log(parent);
    res.send(parent)
})

module.exports = router