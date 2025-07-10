const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
    id:String,
    name:String,
    breed:String,
    age:Number,
    price:Number,
    imageUrl:String,
    description:String,
    category:String,
});
module.exports=mongoose.model('Pet',petSchema);