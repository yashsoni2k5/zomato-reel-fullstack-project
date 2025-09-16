const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt=require("bcryptjs");
const foodPartnerModel = require('../models/foodpartners.model');
async function registerUser(req,res){
    const{fullName,email,password}=req.body;
    const isUserAlreadyExists = await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"user already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await userModel.create({
        fullName,email,password:hashedPassword
    })
    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET)
   res.cookie("token", token, {
  httpOnly: true,   // keeps it safe from JS access
  secure: true,     // required for HTTPS (Render uses HTTPS)
  sameSite: "none"  // allow cross-site requests
});
    res.status(201).json({
        message:"user registered successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullName:user.fullName
        }
    })
}
async function loginUser(req,res) {
     const {email,password}= req.body;
    
     const user = await userModel.findOne({
        email
     });
     
     if(!user){
        res.status(400).json({
            message:"invalid email or password"
        })
     }
     const isPasswordValid = await bcrypt.compare(password,user.password);
     if(!isPasswordValid){
        res.status(400).json({
            message: "invalid email or password"
        })
     }
     const token = jwt.sign({
        _id:user._id
     },process.env.JWT_SECRET)
     res.cookie("token", token, {
  httpOnly: true,   // keeps it safe from JS access
  secure: true,     // required for HTTPS (Render uses HTTPS)
  sameSite: "none"  // allow cross-site requests
});

     res.status(200).json({
        message: "user logged in successfully",
        _id:user._id,
        email:user.email,
        fullName:user.fullName,
     })
}
async function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message: "user logged out successfully"
    })
}
async function registerFoodPartner(req,res) {
  const { name , email , password } = req.body;
  const isAccountAlreadyExists = await  foodPartnerModel.findOne({
    email
  })
  if(isAccountAlreadyExists){
    res.status(400).json({
        message : "account already exists"
    })
  }
  const hashedPassword = await bcrypt.hash(password,10)
  const foodPartner = await foodPartnerModel.create({
name,
email,
password : hashedPassword
  })
  const token = jwt.sign({
    _id:foodPartner._id
  },process.env.JWT_SECRET)

  res.cookie("token", token, {
  httpOnly: true,   // keeps it safe from JS access
  secure: true,     // required for HTTPS (Render uses HTTPS)
  sameSite: "none"  // allow cross-site requests
});
  res.status(201).json({
    message: "foodpartner registered successfully",
    foodpartner :{
        _id: foodPartner._id,
        email: foodPartner.email,
        name : foodPartner.name 
    }
  })
}
async function loginFoodPartner(req,res){
     const {email,password}= req.body;

     const foodPartner = await foodPartnerModel.findOne({
        email
     });
     
     if(!foodPartner){
        return res.status(400).json({
            message:"invalid email or password"
        })
     }
     const isPasswordValid = await bcrypt.compare(password,foodPartner.password);
     if(!isPasswordValid){
       return res.status(400).json({
            message: "invalid email or password"
        })
     }
     const token = jwt.sign({
        _id: foodPartner._id
     },process.env.JWT_SECRET)
     res.cookie("token", token, {
  httpOnly: true,   // keeps it safe from JS access
  secure: true,     // required for HTTPS (Render uses HTTPS)
  sameSite: "none"  // allow cross-site requests
});

     res.status(200).json({
        message: "food-partner logged in successfully",
        _id:foodPartner._id,
        email:foodPartner.email,
        fullName:foodPartner.fullName,
     })
}
function logoutFoodpartner(req,res){
 res.clearCookie("token");
    res.status(200).json({
        message: "foodpartner logged out successfully"
    })
}
module.exports={
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodpartner,
}