// 数据库
module.exports = (app) => {
  const mongoose = require("mongoose");
  mongoose.set("useFindAndModify", false);
  mongoose.connect("mongodb://localhost/node-vue-gamewiki", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  // 因为有可能 a模型引用b模型  b模型引用没使用火出问题
  // require-all  把所有文件引用进去
  // 引用models所有文件
  require("require-all")(__dirname + "/../models");
};
