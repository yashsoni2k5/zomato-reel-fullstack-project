import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Register from '../pages/register.jsx'
import Home from '../pages/general/home.jsx'
import User_login from '../pages/user_login.jsx'
import Food_partner_register from "../pages/food-partner_register"
import Food_partner_login from "../pages/food-partner_login.jsx"
import Create_food from '../pages/general/create_food.jsx'
import Profile from '../pages/general/profile.jsx'
import landingPage from '../pages/general/landingPage.jsx'
const AppRoutes = () => {
  return (
  <Router>
    <Routes>

        <Route path='/' element={<landingPage/>}/>
        <Route path='/user/register' element={<Register/>}/>
        <Route path='/user/login' element={<User_login/>}/>
        <Route path='/food_partner/register' element={<Food_partner_register/>}/>
        <Route path='/food_partner/login' element={<Food_partner_login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/create_food' element={<Create_food/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
    </Routes>
  </Router>
  )
}

export default AppRoutes