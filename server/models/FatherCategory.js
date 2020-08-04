const mongoose = require('mongoose')

const FatherSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

FatherSchema.virtual('children',{
    ref:'Category',
    foreignField:'parent',
    justOne:false,
    localField:'_id'
})

// FatherSchema.virtual('newsList',{
//     ref:'Essay',
//     foreignField:'categories',
//     justOne:false,
//     localField:'_id'
// })



module.exports = mongoose.model('FatherCategory', FatherSchema)