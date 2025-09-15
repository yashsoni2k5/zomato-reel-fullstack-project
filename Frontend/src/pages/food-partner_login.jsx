
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Food_partner_login = () => {
    const Navigate = useNavigate()
  async function handleSubmit(e){
     e.preventDefault();
      
      const email = e.target.email.value
      const password = e.target.password.value
          
    const response= await axios.post("http://localhost:3000/api/auth/food-partner/login",{
         email:email,
         password:password,
      },{
         withCredentials: true
      })
      console.log(response.data)
      Navigate("/Create_food")
   }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-4">
  <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-4">
      Login to Your Account
    </h2>

    {/* User Login Link */}
    <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
      Or{" "}
      <Link
        to="/user/login"
        className="text-indigo-600 font-medium hover:underline"
      >
        login as User
      </Link>
    </p>

    {/* Form */}
    <form onSubmit={(e) => handleSubmit(e)} className="space-y-5 sm:space-y-6">
      
      {/* Email */}
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none shadow-sm text-sm sm:text-base"
          required
        />
        
      </div>

      {/* Password */}
      <div className="relative">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none shadow-sm text-sm sm:text-base"
          required
        />
       
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
      >
        Login
      </button>
    </form>

    {/* Register Link */}
    <p className="text-center text-gray-500 text-sm mt-6 sm:text-base">
      Don’t have an account?{" "}
      <Link
        to="/food_partner/register"
        className="text-indigo-600 font-medium hover:underline"
      >
        Register
      </Link>
    </p>
  </div>
</div>

  )
}

export default Food_partner_login