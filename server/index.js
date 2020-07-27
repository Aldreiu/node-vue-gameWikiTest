const express = require("express");
const app = express();

const port = 5000;

app.use(require("cors")());
app.use(express.json());

// 在express中设置 密钥
app.set('secret', 'fafasd42afad54qasfd');

// 让上传文件能被访问 可见  通过路由
// 托管静态文件
app.use("/uploads", express.static(__dirname + "/uploads"));

// 引入子路由的接口方法
const routes = require("./routers/admin");
const dbs = require("./plugins/db");

// 抽出模块
routes(app);
dbs(app);


app.listen(5000, () => {
  console.log(`http://localhost:${port}`);
});