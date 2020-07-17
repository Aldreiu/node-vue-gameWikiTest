const mongoose = require('mongoose')

const FatherSchema = new mongoose.Schema({
    name:{
        type:String
    }
})

module.exports = mongoose.model('CategoryFather',FatherSchema)