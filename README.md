# node-vue-gameWikiTest

## 一、 项目简介

模仿一个类似 GBF 游戏 wiki

## 二、 管理后台

1.基于 Element ui 的后台管理界面搭建

    1.创建分类（多层级）
    1.分类列表
    1.删除分类

    2.**通过 CRUD 接口**
    2.完成通用接口增删查改

    3.创建武器，道具，角色
    3.完成他们相应的增删查改

    4.新闻模块
    4.使用vue-quill-editor富文本编辑器  并且优化掉里面
    的添加图片，不使用base64格式的方式 会造成请求数据过大
    使用elementui方式的上传去上传一个图片得到的地址，减少
    数据过大

    5.首页广告管理

    6.管理员账号管理(bcrypt 散列加密 为了职业操守让自己也不知道密码)
    6.登录页面
    6.登录接口(jwt,jsonwebtoken)
    6.服务端登录校验
    6.客户端路由限制(beforeEach,meta)
      因为其他请求都可以用 axios拦截器去处理 Authorization
      el-upload使用的是原生的 所以去用 mixin添加Authorization
