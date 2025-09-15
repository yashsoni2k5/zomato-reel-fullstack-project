const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth.controller")
//user auth APIs
router.post('/user/register',authControllers.registerUser);
router.post('/user/login',authControllers.loginUser);
router.get('/user/logout',authControllers.logoutUser);
//foodpartner auth APIs
router.post('/food-partner/register',authControllers.registerFoodPartner);
router.post('/food-partner/login',authControllers.loginFoodPartner);
router.get('/food-partner/logout',authControllers.logoutFoodpartner);
module.exports = router;