const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    // 让密码不被查出来
    select: false,
    set(val) {
      return require("bcrypt").hashSync(val, 10);
    },
  },
});

module.exports = mongoose.model("AdminUser", schema);
