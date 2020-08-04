module.exports = (app) =>{
    const web = require("./webRouter")
    app.use("/web/api",web)
}