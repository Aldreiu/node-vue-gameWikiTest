const router = require("express").Router();

// const mongoose = require('mongoose')
// const Category = mongoose.model('Category')
const Category = require("../../models/Category");
const FatherCategory = require("../../models/FatherCategory");
const Character = require("../../models/Character");
const Essay = require("../../models/Essay");

// 导入新闻
router.get("/news/init", async (req, res) => {
  const parent = await FatherCategory.findOne({
    name: "新闻分类",
  });
  // console.log(parent);
  const cats = await Category.find()
    .where({
      parent: parent,
    })
    .lean();
  console.log(cats);
  const newsTitles = [
    "「グラブル宝箱チャンス！」開催のお知らせ",
    "サマーキャンペーン開催のお知らせ",
    "グラブルサマーギフトキャンペーン開催のお知らせ",
    "レジェンドフェス開催＆新キャラクター水着バージョン「アニラ」浴衣バージョン「ロザミア」「タイアー」紹介のお知らせ",
    "特別生放送のお知らせ",
    "イベント「わたしの愛しのアウギュステ」開催のお知らせ",
    "ネズ水着スキンセット販売のお知らせ",
    "グランデフェス開催＆新キャラクター水着バージョン「ルシオ」「アーミラ」紹介のお知らせ",
    "最終上限解放！「クリスティーナ」",
    "これからの「グランブルーファンタジー」2020年7月号",
    "レジェンドフェス開催＆新キャラクター「レオナ」(リミテッドシリーズ)「コルル」(水着バージョン)「アビー」紹介のお知らせ",
    "イベント「熱闘！ 真夏のフードファイト！」開催のお知らせ",
    "キャラクターソング第19弾「Unfinished Melody」発売のお知らせ",
    "最終上限解放！「レ・フィーエ」",
    "「ゆるっと！ぐらぶるTVちゃんねるっ！」放送のお知らせ",
    "グランデフェス開催＆新キャラクター「ノイシュ」「ペンギー」紹介のお知らせ",
    "「ぐらぶるっ！」9巻発売のお知らせ",
    "LINEクリエイターズ着せかえ3種同時配信開始！",
    "これからの「グランブルーファンタジー」2020年6月号",
    "6月のバランス調整について",
    "レジェンドフェス開催＆新キャラクター「パーシヴァル」(光属性)「サテュロス」紹介のお知らせ",
    "最終上限解放！「アオイドス」",
    "イベント「The End of THE DOSS」開催のお知らせ",
    "「グランブルーファンタジー」LINE公式スタンプ第3弾発売！",
    "最終上限解放！「ウェルダー」",
    "グランデフェス開催＆新キャラクター「イルノート」「プレデター」紹介のお知らせ",
    "『グランブルーファンタジー』×『アイドルマスター シンデレラガールズ』コラボレーションイベント開催のお知らせ",
    "武器「スペリオルシリーズ」の最終上限解放について",
    "「グラブルEXTRAフェス2020」新アトラクション『キャラクタートークスポット』紹介！",
    "『グランブルーファンタジー』× 『アイドルマスター シンデレラガールズ』コラボレーションイベント第8弾開催決定のお知らせ",
    "「サプライズ！！スペシャルガチャセットキャンペーン」開催のお知らせ",
    "キャラクターソングCD第19弾「Unfinished Melody」予約開始のお知らせ",
    "これからの「グランブルーファンタジー」2020年5月号",
    "レジェンドフェス開催＆新キャラクター「ラインハルザ」(リミテッドシリーズ)「シュラ」紹介＆至高の一杯スキンセット販売のお知らせ",
    "イベント「窮寇迫ること勿れ」開催のお知らせ",
    "GWグラブルやろうぜキャンペーン開催のお知らせ",
    "最終上限解放！「イオ」",
    "グランデフェス開催＆新キャラクター 「ヘリヤ」「阿吽の破弓 ミラオル＆ザーリリャオー」紹介のお知らせ",
    "緊急開催！「消費トレジャー0キャンペーン」のお知らせ",
    "これからの「グランブルーファンタジー」2020年4月号",
  ];
  // console.log(newsTitles);
  const newsList = newsTitles.map((title) => {
    const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5);
    return {
      categories: randomCats.slice(0, 2),
      title: title,
    };
  });

  // await Essay.deleteMany({})
  // await Essay.insertMany(newsList)
  res.send(newsList);
});

// 新闻列表
router.get("/news/list", async (req, res) => {
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
    name: "新闻分类",
  });

  // 使用聚合查询 类似mysql的关联 同时执行好几次查询
  const cats = await Category.aggregate([
    // 类似where查询  聚合管道    1.过滤数据
    {
      $match: {
        parent: parent._id
      }
    }, // 查找根据父级关联的_id
    // 类似关系型数据库的 join 左外连接  以数据中的 name为主体去查其他 另外集合
    {
      $lookup: {
        //    2.关联查询
        // 关联的集合名字
        from: "essays", // 集合名字是 model模型的名字的复数小写形式   mongoose.model的第三个参数一般省略 表示集合名字
        localField: "_id", // 本地键的名字
        foreignField: "categories", // 外地键
        as: "newsList", // 取个别名
      },
    },
    // 去定义 newsList 只要去拿到 5个
    {
      // 3.对数据进行进行改变 吧多个变成规定5条数据
      $addFields: {
        newsList: {
          $slice: ["$newsList", 5]
        },
      },
    },
  ]);
  const subCats = cats.map((el) => el._id);
  // console.log(subCats);
  cats.unshift({
    name: "热门",
    newsList: await Essay.find()
      .where({
        categories: {
          $in: subCats
        },
      })
      .populate("categories")
      .limit(5)
      .lean(),
  });

  // 处理第一个特殊的热门的分类 因为他里面包含多种分类
  cats.map((cat) => {
    cat.newsList.map((news) => {
      news.categoryName =
        cat.name === "热门" ? news.categories[0].name : cat.name;
      return news;
    });
    return cat;
  });

  res.send(cats);
});

// 导入角色数据
// $$('#data-search .ctrl-value.ctrl-value-element.select2-hidden-accessible > option').map((el,i)=>{return { name:el.innerText,heroes:$$('.search-content .list-form-middle .p-item').map(el=>{return {name:$$('a',el)[0].title,avatar:$$('a img',el)[0].src}}) }})[1]
router.get("/characters/init", async (req, res) => {
  // 如果数据有问题先清空
  await Character.deleteMany({});
  const rawData = [{
      name: "热门",
      heroes: [{
          name: "阿比(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/37/M_3040284000_01.jpg",
        },
        {
          name: "萨缇洛斯",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/cd/M_3040280000_01.jpg",
        },
        {
          name: "伊尔诺特",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/44/M_3040277000_01.jpg",
        },
        {
          name: "莱茵哈撒(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/94/M_3040274000_01.jpg",
        },
        {
          name: "德朗克(火)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e2/M_3040269000_01.jpg",
        },
        {
          name: "无限",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e4/M_3040267000_01.jpg",
        },
        {
          name: "缇娜(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/ba/M_3040266000_01.jpg",
        },
        {
          name: "梅格",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/a9/M_3030290000_01.jpg",
        },
        {
          name: "阿米拉(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/95/M_3040287000_01.jpg",
        },
        {
          name: "埃尔斯特之要 黑骑士&欧尔姬丝",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/8c/M_3040270000_01.jpg",
        },
        {
          name: "布列迪塔(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4c/M_3040278000_01.jpg",
        },
        {
          name: "零",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/77/M_3040265000_01.jpg",
        },
        {
          name: "希斯(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/18/M_3040262000_01.jpg",
        },
        {
          name: "卢修斯(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/cd/M_3040254000_01.jpg",
        },
        {
          name: "碧卡拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1a/M_3040252000_01.jpg",
        },
        {
          name: "赫莱尔·本·夏蕾姆",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ea/M_3040251000_01.jpg",
        },
        {
          name: "容",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/33/M_3030277000_01.jpg",
        },
        {
          name: "蔻",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/54/M_3040242000_01.jpg",
        },
        {
          name: "绚濑绘里＆矢泽妮可＆东条希",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e1/M_3040231000_01.jpg",
        },
        {
          name: "路西欧(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/54/M_3040286000_01.jpg",
        },
        {
          name: "克璐璐(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ec/M_3040283000_01.jpg",
        },
        {
          name: "秋罗",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e6/M_3040273000_01.jpg",
        },
        {
          name: "米拉奥尔&扎莉莉亚欧",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/55/M_3040272000_01.jpg",
        },
        {
          name: "斯特姆(水)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/dc/M_3040268000_01.jpg",
        },
        {
          name: "飞龙和吸血公主 斑比&贝丝",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/74/M_3040264000_01.jpg",
        },
        {
          name: "莉夏(水)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4f/M_3040263000_01.jpg",
        },
        {
          name: "蕾欧娜(浴衣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/fe/M_3030274000_01.jpg",
        },
        {
          name: "欧罗巴(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/68/M_3040226000_01.jpg",
        },
        {
          name: "卡莉奥斯特萝(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/31/M_3040225000_01.jpg",
        },
        {
          name: "阿妮拉(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c3/M_3040288000_01.jpg",
        },
        {
          name: "诺伊修(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/dc/M_3040281000_01.jpg",
        },
        {
          name: "高垣枫",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4e/M_3040276000_01.jpg",
        },
        {
          name: "格里姆尼尔(情人节)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/2e/M_3040261000_01.jpg",
        },
        {
          name: "尤达拉哈(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/38/M_3040259000_01.jpg",
        },
        {
          name: "乔伊",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/29/M_3030280000_01.jpg",
        },
        {
          name: "塞鲁艾尔(圣诞)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4a/M_3040250000_01.jpg",
        },
        {
          name: "扭蛋平",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/f0/M_3040248000_01.jpg",
        },
        {
          name: "缪恩(圣诞)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ef/M_3040246000_01.jpg",
        },
        {
          name: "库鲁尼(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/81/M_3030278000_01.jpg",
        },
        {
          name: "苏丝雅(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4e/M_3040241000_01.jpg",
        },
        {
          name: "莫妮卡(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/57/M_3040238000_01.jpg",
        },
        {
          name: "勇者与公主 斯坦＆阿莉莎",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/af/M_3040233000_01.jpg",
        },
        {
          name: "星空凛＆小泉花阳＆西木野真姬",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1e/M_3040229000_01.jpg",
        },
        {
          name: "枢木朱雀",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/3c/M_3040220000_01.jpg",
        },
        {
          name: "战争三女神",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/b9/M_3040218000_01.jpg",
        },
        {
          name: "格里姆尼尔(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/34/M_3040212000_01.jpg",
        },
        {
          name: "维拉(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/2a/M_3040211000_01.jpg",
        },
        {
          name: "可露瓦(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/67/M_3030266000_01.jpg",
        },
        {
          name: "尤艾尔(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/53/M_3040210000_01.jpg",
        },
        {
          name: "埃斯塔利奥拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/64/M_3040163000_01.jpg",
        },
        {
          name: "卡兹利拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/2d/M_3040166000_01.jpg",
        },
        {
          name: "赫尔艾斯(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/69/M_3040208000_01.jpg",
        },
      ],
    },
    {
      name: "火",
      heroes: [{
          name: "阿比(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/37/M_3040284000_01.jpg",
        },
        {
          name: "萨缇洛斯",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/cd/M_3040280000_01.jpg",
        },
        {
          name: "伊尔诺特",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/44/M_3040277000_01.jpg",
        },
        {
          name: "莱茵哈撒(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/94/M_3040274000_01.jpg",
        },
        {
          name: "德朗克(火)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e2/M_3040269000_01.jpg",
        },
        {
          name: "无限",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e4/M_3040267000_01.jpg",
        },
        {
          name: "缇娜(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/ba/M_3040266000_01.jpg",
        },
        {
          name: "斯卡哈(情人节)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/28/M_3040260000_01.jpg",
        },
        {
          name: "优希斯(火)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/dc/M_3040253000_01.jpg",
        },
        {
          name: "维拉(特典)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c7/M_3040243000_01.jpg",
        },
        {
          name: "齐格飞(火)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c8/M_3040237000_01.jpg",
        },
        {
          name: "科罗萨斯",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1d/M_3040235000_01.jpg",
        },
        {
          name: "塔维娜",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/f8/M_3040234000_01.jpg",
        },
        {
          name: "卡西乌斯(浴衣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/55/M_3030273000_01.jpg",
        },
        {
          name: "星期五小姐(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/d3/M_3030271000_01.jpg",
        },
        {
          name: "红月华莲",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/0/0d/M_3040221000_01.jpg",
        },
        {
          name: "阿斯特尔(火)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/0/01/M_3030268000_01.jpg",
        },
        {
          name: "芙劳",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4e/M_3040161000_01.jpg",
        },
        {
          name: "阿拉南",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/11/M_3040167000_01.jpg",
        },
        {
          name: "雅典娜",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/0/0b/M_3040202000_01.jpg",
        },
        {
          name: "湿婆",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/31/M_3040196000_01.jpg",
        },
        {
          name: "罗丝涅(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4f/M_3030256000_01.jpg",
        },
        {
          name: "白龙的双骑士 兰斯洛特＆维恩",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/3a/M_3040191000_01.jpg",
        },
        {
          name: "翼",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1e/M_3040180000_01.jpg",
        },
        {
          name: "松浦果南＆黑泽黛雅＆小原鞠莉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/a6/M_3040185000_01.jpg",
        },
        {
          name: "伊尔莎(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/fa/M_3040177000_01.jpg",
        },
        {
          name: "缇娜(情人节)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/20/M_3030236000_01.jpg",
        },
        {
          name: "佐伊(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/cf/M_3030233000_01.jpg",
        },
        {
          name: "特蕾丝(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/6b/M_3040149000_01.jpg",
        },
        {
          name: "伊帕兹(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c7/M_3030232000_01.jpg",
        },
      ],
    },
    {
      name: "水",
      heroes: [{
          name: "路西欧(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/54/M_3040286000_01.jpg",
        },
        {
          name: "克璐璐(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ec/M_3040283000_01.jpg",
        },
        {
          name: "秋罗",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e6/M_3040273000_01.jpg",
        },
        {
          name: "米拉奥尔&扎莉莉亚欧",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/55/M_3040272000_01.jpg",
        },
        {
          name: "斯特姆(水)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/dc/M_3040268000_01.jpg",
        },
        {
          name: "飞龙和吸血公主 斑比&贝丝",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/74/M_3040264000_01.jpg",
        },
        {
          name: "莉夏(水)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4f/M_3040263000_01.jpg",
        },
        {
          name: "蕾欧娜(浴衣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/fe/M_3030274000_01.jpg",
        },
        {
          name: "欧罗巴(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/68/M_3040226000_01.jpg",
        },
        {
          name: "卡莉奥斯特萝(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/31/M_3040225000_01.jpg",
        },
        {
          name: "圣德芬(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/90/M_3040224000_01.jpg",
        },
        {
          name: "玛裘拉·玛利乌斯",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/2f/M_3040213000_01.jpg",
        },
        {
          name: "玛利亚·特蕾莎",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c5/M_3040160000_01.jpg",
        },
        {
          name: "哈泽利拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/f0/M_3040168000_01.jpg",
        },
        {
          name: "阿古罗瓦尔",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/9d/M_3040192000_01.jpg",
        },
        {
          name: "欧罗巴(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c5/M_3040190000_01.jpg",
        },
        {
          name: "芙莉亚",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e2/M_3040181000_01.jpg",
        },
        {
          name: "凯拉娜(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c5/M_3030251000_01.jpg",
        },
        {
          name: "古蕾娅(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1a/M_3040179000_01.jpg",
        },
        {
          name: "樱内梨子＆高海千歌＆渡边曜",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/f4/M_3040183000_01.jpg",
        },
        {
          name: "法拉(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/b2/M_3030248000_01.jpg",
        },
        {
          name: "莉露露(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/7f/M_3030247000_01.jpg",
        },
        {
          name: "库库鲁(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/8e/M_3040159000_01.jpg",
        },
        {
          name: "阿莉莎(活动/水)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/71/M_3030242000_01.jpg",
        },
        {
          name: "瓦姬拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/70/M_3040147000_01.jpg",
        },
        {
          name: "尤艾尔(水)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/8e/M_3040138000_01.jpg",
        },
        {
          name: "尤艾尔(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/5c/M_3030223000_01.jpg",
        },
        {
          name: "安",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/48/M_3040132000_01.jpg",
        },
        {
          name: "欧文",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/3e/M_3030207000_01.jpg",
        },
        {
          name: "戴安萨(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/75/M_3040129000_01.jpg",
        },
      ],
    },
    {
      name: "土",
      heroes: [{
          name: "蕾欧娜(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/f5/M_3040285000_01.jpg",
        },
        {
          name: "企小鹅(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/ce/M_3040282000_01.jpg",
        },
        {
          name: "赫丽雅(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/0/0f/M_3040271000_01.jpg",
        },
        {
          name: "仁(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/8c/M_3040257000_01.jpg",
        },
        {
          name: "娜尔梅亚(圣诞)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/72/M_3040249000_01.jpg",
        },
        {
          name: "玛姬莎(圣诞)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/be/M_3040247000_01.jpg",
        },
        {
          name: "扎扎(万圣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/80/M_3030276000_01.jpg",
        },
        {
          name: "真红与冥暗 泽塔&巴萨拉卡",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c4/M_3040239000_01.jpg",
        },
        {
          name: "科瓦菲尔(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/19/M_3030275000_01.jpg",
        },
        {
          name: "布洛蒂亚(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/a9/M_3040232000_01.jpg",
        },
        {
          name: "杰西卡(浴衣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/14/M_3040227000_01.jpg",
        },
        {
          name: "白龙的双骑士 兰斯洛特＆维恩(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4c/M_3030272000_01.jpg",
        },
        {
          name: "法斯蒂瓦(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/fd/M_3040217000_01.jpg",
        },
        {
          name: "巴尔",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/77/M_3040215000_01.jpg",
        },
        {
          name: "美杜莎(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e3/M_3040214000_01.jpg",
        },
        {
          name: "凯姆",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/85/M_3040164000_01.jpg",
        },
        {
          name: "洛贝利亚",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/6f/M_3040165000_01.jpg",
        },
        {
          name: "丹特＆福莱海特",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/8b/M_3040205000_01.jpg",
        },
        {
          name: "凯瑟琳(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/b9/M_3030264000_01.jpg",
        },
        {
          name: "贝阿朵丽丝(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/bc/M_3030261000_01.jpg",
        },
        {
          name: "拉丝缇娜(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e4/M_3030257000_01.jpg",
        },
        {
          name: "罗艾因小队",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/0/03/M_3030252000_01.jpg",
        },
        {
          name: "阿鲁梅达(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/91/M_3030250000_01.jpg",
        },
        {
          name: "津岛善子＆国木田花丸＆黑泽露比",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/fb/M_3040184000_01.jpg",
        },
        {
          name: "萝赛塔(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/5a/M_3040176000_01.jpg",
        },
        {
          name: "万查(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/37/M_3030243000_01.jpg",
        },
        {
          name: "该隐(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/b6/M_3040171000_01.jpg",
        },
        {
          name: "索利茲(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e3/M_3040170000_01.jpg",
        },
        {
          name: "蕾欧娜(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ef/M_3030241000_01.jpg",
        },
        {
          name: "卡露梅莉娜(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4b/M_3030240000_01.jpg",
        },
      ],
    },
    {
      name: "风",
      heroes: [{
          name: "阿妮拉(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c3/M_3040288000_01.jpg",
        },
        {
          name: "诺伊修(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/dc/M_3040281000_01.jpg",
        },
        {
          name: "高垣枫",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4e/M_3040276000_01.jpg",
        },
        {
          name: "格里姆尼尔(情人节)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/2e/M_3040261000_01.jpg",
        },
        {
          name: "尤达拉哈(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/38/M_3040259000_01.jpg",
        },
        {
          name: "乔伊",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/29/M_3030280000_01.jpg",
        },
        {
          name: "塞鲁艾尔(圣诞)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4a/M_3040250000_01.jpg",
        },
        {
          name: "扭蛋平",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/f0/M_3040248000_01.jpg",
        },
        {
          name: "缪恩(圣诞)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ef/M_3040246000_01.jpg",
        },
        {
          name: "库鲁尼(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/81/M_3030278000_01.jpg",
        },
        {
          name: "苏丝雅(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4e/M_3040241000_01.jpg",
        },
        {
          name: "莫妮卡(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/57/M_3040238000_01.jpg",
        },
        {
          name: "勇者与公主 斯坦＆阿莉莎",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/af/M_3040233000_01.jpg",
        },
        {
          name: "星空凛＆小泉花阳＆西木野真姬",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1e/M_3040229000_01.jpg",
        },
        {
          name: "枢木朱雀",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/3c/M_3040220000_01.jpg",
        },
        {
          name: "战争三女神",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/b9/M_3040218000_01.jpg",
        },
        {
          name: "格里姆尼尔(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/34/M_3040212000_01.jpg",
        },
        {
          name: "维拉(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/2a/M_3040211000_01.jpg",
        },
        {
          name: "可露瓦(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/67/M_3030266000_01.jpg",
        },
        {
          name: "尤艾尔(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/53/M_3040210000_01.jpg",
        },
        {
          name: "埃斯塔利奥拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/64/M_3040163000_01.jpg",
        },
        {
          name: "卡兹利拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/2d/M_3040166000_01.jpg",
        },
        {
          name: "赫尔艾斯(风)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/69/M_3040208000_01.jpg",
        },
        {
          name: "千(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/9f/M_3040204000_01.jpg",
        },
        {
          name: "雅雅(圣诞)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/ac/M_3030259000_01.jpg",
        },
        {
          name: "可可萝",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4f/M_3040201000_01.jpg",
        },
        {
          name: "尤里乌斯",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/8b/M_3040199000_01.jpg",
        },
        {
          name: "小鸡班 亚瑟＆莫德雷德",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/96/M_3030255000_01.jpg",
        },
        {
          name: "莫妮卡(转世)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/eb/M_3040186000_01.jpg",
        },
        {
          name: "尤利(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/37/M_3030253000_01.jpg",
        },
      ],
    },
    {
      name: "光",
      heroes: [{
          name: "泰尔(浴衣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/7b/M_3030300000_01.jpg",
        },
        {
          name: "萝莎米娅(浴衣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/ac/M_3040289000_01.jpg",
        },
        {
          name: "帕西瓦尔(光)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/71/M_3040279000_01.jpg",
        },
        {
          name: "涩谷凛&岛村卯月&本田未央",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/80/M_3040275000_01.jpg",
        },
        {
          name: "伊尔莎(光)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/84/M_3040258000_01.jpg",
        },
        {
          name: "妲奴亚(光)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/a4/M_3040256000_01.jpg",
        },
        {
          name: "诺亚(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/0/04/M_3040255000_01.jpg",
        },
        {
          name: "库碧拉(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/24/M_3030279000_01.jpg",
        },
        {
          name: "贞德(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/bc/M_3040245000_01.jpg",
        },
        {
          name: "志鸟",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/81/M_3040244000_01.jpg",
        },
        {
          name: "哈雷泽娜(万圣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1c/M_3040240000_01.jpg",
        },
        {
          name: "莎拉(光)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/50/M_3040236000_01.jpg",
        },
        {
          name: "园田海未＆高坂穗乃果＆南小鸟",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ec/M_3040230000_01.jpg",
        },
        {
          name: "哈鲁特＆马鲁特",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/5a/M_3040223000_01.jpg",
        },
        {
          name: "菲拉索皮拉(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/82/M_3030270000_01.jpg",
        },
        {
          name: "高贵的骑士 布里吉尔＆科德利亚",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/f4/M_3030269000_01.jpg",
        },
        {
          name: "盖森伯格",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1f/M_3040162000_01.jpg",
        },
        {
          name: "米琳(光)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/d5/M_3030265000_01.jpg",
        },
        {
          name: "梅丽莎贝尔(情人节)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/d3/M_3040207000_01.jpg",
        },
        {
          name: "库碧拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/2/28/M_3040197000_01.jpg",
        },
        {
          name: "美黛拉(圣诞)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/75/M_3040195000_01.jpg",
        },
        {
          name: "佩可莉露",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/86/M_3040200000_01.jpg",
        },
        {
          name: "夏洛特(光)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/7c/M_3040194000_01.jpg",
        },
        {
          name: "萨比尔巴拉(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/bb/M_3030258000_01.jpg",
        },
        {
          name: "雷比昂姐妹 麦姆＆米姆＆梅姆",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/b/b2/M_3040193000_01.jpg",
        },
        {
          name: "光之美少女黑天使＆白天使",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/7d/M_3040188000_01.jpg",
        },
        {
          name: "席尔瓦(光)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/a8/M_3040187000_01.jpg",
        },
        {
          name: "诺伊修(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ee/M_3040178000_01.jpg",
        },
        {
          name: "艾尔塔(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/5e/M_3030244000_01.jpg",
        },
        {
          name: "巴洛瓦(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/6d/M_3030239000_01.jpg",
        },
      ],
    },
    {
      name: "暗",
      heroes: [{
          name: "梅格",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/a/a9/M_3030290000_01.jpg",
        },
        {
          name: "阿米拉(泳装)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/95/M_3040287000_01.jpg",
        },
        {
          name: "埃尔斯特之要 黑骑士&欧尔姬丝",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/8c/M_3040270000_01.jpg",
        },
        {
          name: "布列迪塔(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/4c/M_3040278000_01.jpg",
        },
        {
          name: "零",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/77/M_3040265000_01.jpg",
        },
        {
          name: "希斯(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/18/M_3040262000_01.jpg",
        },
        {
          name: "卢修斯(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/cd/M_3040254000_01.jpg",
        },
        {
          name: "碧卡拉",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1a/M_3040252000_01.jpg",
        },
        {
          name: "赫莱尔·本·夏蕾姆",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/ea/M_3040251000_01.jpg",
        },
        {
          name: "容",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/33/M_3030277000_01.jpg",
        },
        {
          name: "蔻",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/54/M_3040242000_01.jpg",
        },
        {
          name: "绚濑绘里＆矢泽妮可＆东条希",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/e/e1/M_3040231000_01.jpg",
        },
        {
          name: "安苏莉娅(浴衣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/30/M_3040228000_01.jpg",
        },
        {
          name: "克璐璐(暗)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/7f/M_3040222000_01.jpg",
        },
        {
          name: "鲁路修·兰佩洛基",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/4/44/M_3040219000_01.jpg",
        },
        {
          name: "凯露",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/f7/M_3040216000_01.jpg",
        },
        {
          name: "理查德(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/dc/M_3030267000_01.jpg",
        },
        {
          name: "尼娅",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/9/94/M_3040169000_01.jpg",
        },
        {
          name: "菲莉(限定)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/0/0a/M_3040209000_01.jpg",
        },
        {
          name: "克拉莉丝(情人节)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/d3/M_3040206000_01.jpg",
        },
        {
          name: "塔尼亚(SSR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/c5/M_3040203000_01.jpg",
        },
        {
          name: "斯卡尔(SR)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/c/cd/M_3030263000_01.jpg",
        },
        {
          name: "尤斯提斯(暗)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/8/88/M_3040198000_01.jpg",
        },
        {
          name: "卡西乌斯(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/f/fe/M_3030262000_01.jpg",
        },
        {
          name: "灰夫人(万圣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/3/38/M_3040189000_01.jpg",
        },
        {
          name: "菲泽(万圣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/6/6f/M_3030254000_01.jpg",
        },
        {
          name: "小芙",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/7/7a/M_3040182000_01.jpg",
        },
        {
          name: "阿露露梅娅(浴衣)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/1/1e/M_3030249000_01.jpg",
        },
        {
          name: "奥莉薇尔(活动)",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/5/51/M_3030246000_01.jpg",
        },
        {
          name: "Joker",
          avatar: "https://huiji-public.huijistatic.com/gbf/uploads/d/da/M_3040173000_01.jpg",
        },
      ],
    },
  ];
  console.log(typeof rawData);
  for (let cat of rawData) {
    if (cat.name === "热门") {
      continue;
    }
    console.log(cat.name);
    // 找到当前分类对应数据中的数据
    const category = await Category.findOne({
      name: cat.name,
    });

    cat.heroes = cat.heroes.map((hero) => {
      hero.attribute = category;
      return hero;
    });

    // 录入角色
    await Character.insertMany(cat.heroes);
  }
  res.send(await Character.find());
});

// 角色列表
router.get("/characters/list", async (req, res) => {
  const parent = await FatherCategory.findOne({
    name: "属性",
  });

  // 使用聚合查询 类似mysql的关联 同时执行好几次查询
  const cats = await Category.aggregate([
    // 类似where查询  聚合管道    1.过滤数据
    {
      $match: {
        parent: parent._id
      }
    }, // 查找根据父级关联的_id
    // 类似关系型数据库的 join 左外连接  以数据中的 name为主体去查其他 另外集合
    {
      $lookup: {
        //    2.关联查询
        // 关联的集合名字
        from: "characters", // 集合名字是 model模型的名字的复数小写形式   mongoose.model的第三个参数一般省略 表示集合名字
        localField: "_id", // 本地键的名字
        foreignField: "attribute", // 外地键
        as: "charactersList", // 取个别名
      },
    },
  ]);
  const subCats = cats.map((el) => el._id);
  // console.log(subCats);
  cats.unshift({
    name: "热门",
    charactersList: await Character.find()
      .where({
        attribute: {
          $in: subCats
        },
      })
      .populate("attribute")
      .limit(10)
      .lean(),
  });

  res.send(cats);
});

//   文章详情
router.get("/essays/:id", async (req, res) => {
  const data = await Essay.findById(req.params.id).lean();
  data.related = await Essay.find()
    .where({
      categories: {
        $in: data.categories
      }
    })
    .limit(2);
  console.log(data);
  res.send(data);
});

// 通过id找到对应的角色
router.get("/characters/:id",async (req,res) =>{
  const data = await Character
  .findById(req.params.id)
  .populate('categories')
  .populate('attribute')
  .populate('race')
  .populate('items1.article')
  .populate('items2.article')
  .populate('items3.article')
  .populate('items4.article')
  .populate('items5.article')
  .lean()   // lean 显示成javascript形式 可以进行去添加字段
  res.send(data)
})

module.exports = router;