const express = require('express');
const  {authUserMiddleware}  = require('../middlewares/auth.middleware');
const foodPartnerController = require('../controllers/foodPartner.controller')
const router = express.Router();

router.get("/:id",authUserMiddleware,foodPartnerController.getFoodPartnerById)
module.exports = router