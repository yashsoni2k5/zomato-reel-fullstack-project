const foodPartnerModel = require("../models/foodpartners.model");
const foodModel = require("../models/food.model")
async function getFoodPartnerById(req,res){
    const foodPartnerId = req.params.id;
   
    const foodPartner = await foodPartnerModel.findById(foodPartnerId);
    const foodItemsByFoodParters = await foodModel.find({foodpartner :foodPartnerId})
    if(!foodPartner){
        return res.status(404).json({
            message:"food partner not found "
        })
    }
    res.status(200).json({
        message:"food partner found",
        foodPartner:{
            ...foodPartner.toObject(),
            foodItems: foodItemsByFoodParters,

        }
        
    })
}
module.exports={
    getFoodPartnerById
}