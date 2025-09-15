const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
name : {
    required:true,
    type:String,
},
 video:{
    type: String,
    required:true,
 },
 description:{
    type: String,
 },
 foodpartner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"foodpartner"
 }

})
   
 const foodModel = mongoose.model('food',foodSchema)
 module.exports =foodModel;