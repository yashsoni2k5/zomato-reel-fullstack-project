const foodModel = require("../models/food.model");
const StorageService = require("../services/service.storage");
const {v4:uuid}=require("uuid");

async function createFood(req,res){

const fileUploadResult = await StorageService.uploadFile(req.file.buffer,uuid())

const foodItem = await foodModel.create({
    name:req.body.name,
    description:req.body.description,
    video:fileUploadResult.url,
    foodpartner:req.foodPartner._id,
}) 
res.status(201).json({
    message:"food created successfully",
    food:foodItem,
})
}
async function getFoodItem(req,res){
const foodItems =  await foodModel.find({})
res.status(201).json({
    message:"food items fetched successfully",
    foodItems,
})
}
module.exports = {
    createFood,
    getFoodItem
}