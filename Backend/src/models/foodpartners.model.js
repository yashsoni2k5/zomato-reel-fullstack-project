const mongoose = require('mongoose');

const foodPartnerSchema = new mongoose.Schema({
name : {
    required:true,
    type:String,
},
email: {
    required : true,
    type : String,
    unique:true,
},
password :{
    required : true,
    type : String,
}

})
   
 const foodPartnerModel = mongoose.model('foodpartner',foodPartnerSchema)
 module.exports =foodPartnerModel;