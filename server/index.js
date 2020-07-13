const express = require('express');
const app = express();

const port = 5000;

app.use(require('cors')())
app.use(express.json())

// 引入子路由的接口方法
const routes = require("./routers/admin");
const dbs = require("./plugins/db");

routes(app);
dbs(app);


app.listen(5000, () => {
    console.log(`http://localhost:${port}`);
});