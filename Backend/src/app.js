const express = require('express');
const cookieParser = require("cookie-parser")
const authRoutes= require("./routes/auth.routes")
const foodRoutes = require("./routes/food.routes")
const foodPartnerRoutes = require("./routes/foodpartner.routes")
const cors = require("cors");


const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello world ')
})
app.use("/api/auth",authRoutes);
app.use("/api/food",foodRoutes);
app.use("/api/food-partner",foodPartnerRoutes)
module.exports = app;