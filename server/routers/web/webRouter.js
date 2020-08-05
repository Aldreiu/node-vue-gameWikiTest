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
    console.log(cats);
    const newsTitles = ["「グラブル宝箱チャンス！」開催のお知らせ", "サマーキャンペーン開催のお知らせ", "グラブルサマーギフトキャンペーン開催のお知らせ", "レジェンドフェス開催＆新キャラクター水着バージョン「アニラ」浴衣バージョン「ロザミア」「タイアー」紹介のお知らせ", "特別生放送のお知らせ", "イベント「わたしの愛しのアウギュステ」開催のお知らせ", "ネズ水着スキンセット販売のお知らせ", "グランデフェス開催＆新キャラクター水着バージョン「ルシオ」「アーミラ」紹介のお知らせ", "最終上限解放！「クリスティーナ」", "これからの「グランブルーファンタジー」2020年7月号","レジェンドフェス開催＆新キャラクター「レオナ」(リミテッドシリーズ)「コルル」(水着バージョン)「アビー」紹介のお知らせ", "イベント「熱闘！ 真夏のフードファイト！」開催のお知らせ", "キャラクターソング第19弾「Unfinished Melody」発売のお知らせ", "最終上限解放！「レ・フィーエ」", "「ゆるっと！ぐらぶるTVちゃんねるっ！」放送のお知らせ", "グランデフェス開催＆新キャラクター「ノイシュ」「ペンギー」紹介のお知らせ", "「ぐらぶるっ！」9巻発売のお知らせ", "LINEクリエイターズ着せかえ3種同時配信開始！", "これからの「グランブルーファンタジー」2020年6月号", "6月のバランス調整について","レジェンドフェス開催＆新キャラクター「パーシヴァル」(光属性)「サテュロス」紹介のお知らせ", "最終上限解放！「アオイドス」", "イベント「The End of THE DOSS」開催のお知らせ", "「グランブルーファンタジー」LINE公式スタンプ第3弾発売！", "最終上限解放！「ウェルダー」", "グランデフェス開催＆新キャラクター「イルノート」「プレデター」紹介のお知らせ", "『グランブルーファンタジー』×『アイドルマスター シンデレラガールズ』コラボレーションイベント開催のお知らせ", "武器「スペリオルシリーズ」の最終上限解放について", "「グラブルEXTRAフェス2020」新アトラクション『キャラクタートークスポット』紹介！", "『グランブルーファンタジー』× 『アイドルマスター シンデレラガールズ』コラボレーションイベント第8弾開催決定のお知らせ", "「サプライズ！！スペシャルガチャセットキャンペーン」開催のお知らせ", "キャラクターソングCD第19弾「Unfinished Melody」予約開始のお知らせ", "これからの「グランブルーファンタジー」2020年5月号","レジェンドフェス開催＆新キャラクター「ラインハルザ」(リミテッドシリーズ)「シュラ」紹介＆至高の一杯スキンセット販売のお知らせ", "イベント「窮寇迫ること勿れ」開催のお知らせ", "GWグラブルやろうぜキャンペーン開催のお知らせ", "最終上限解放！「イオ」", "グランデフェス開催＆新キャラクター 「ヘリヤ」「阿吽の破弓 ミラオル＆ザーリリャオー」紹介のお知らせ", "緊急開催！「消費トレジャー0キャンペーン」のお知らせ", "これからの「グランブルーファンタジー」2020年4月号"]
    // console.log(newsTitles);
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
    // const parent = await FatherCategory.findOne({
    //     name:'新闻分类'
    // }).populate({
    //     path:'children',
    //     populate:{
    //         path:'newsList'
    //     }
    // }).lean()
    // console.log(parent);

    const parent = await FatherCategory.findOne({
        name:'新闻分类'
    })

    // 使用聚合查询 类似mysql的关联 同时执行好几次查询
    const cats = await Category.aggregate([
        // 类似where查询  聚合管道    1.过滤数据
        {$match:{parent:parent._id}},  // 查找根据父级关联的_id
        // 类似关系型数据库的 join 左外连接  以数据中的 name为主体去查其他 另外集合
        {$lookup:{            //    2.关联查询
            // 关联的集合名字
            from:'essays',  // 集合名字是 model模型的名字的复数小写形式   mongoose.model的第三个参数一般省略 表示集合名字
            localField:'_id', // 本地键的名字
            foreignField:'categories', // 外地键
            as:'newsList'  // 取个别名
        }},
        // 去定义 newsList 只要去拿到 5个
        {                    // 3.对数据进行进行改变 吧多个变成规定5条数据
            $addFields:{
                newsList:{$slice:['$newsList',5]}
            }
        }
    ])
    const subCats = cats.map(el => el._id)
    // console.log(subCats);
    cats.unshift({
        name:"热门",
        newsList:await Essay.find().where({
            categories:{$in:subCats}
        }).populate('categories').limit(5).lean()
    })

    // 处理第一个特殊的热门的分类 因为他里面包含多种分类
    cats.map(cat =>{
        cat.newsList.map(news =>{
            news.categoryName = cat.name === "热门"?news.categories[0].name : cat.name
            return news
        })
        return cat
    })

    res.send(cats)
})

module.exports = router