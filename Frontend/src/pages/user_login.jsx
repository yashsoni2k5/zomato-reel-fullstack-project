import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function User_login() {
    const Navigate = useNavigate()
 async function handleSubmit(e){
    e.preventDefault();
     
     const email = e.target.email.value
     const password = e.target.password.value
         
   const response= await axios.post("https://zomato-reel-fullstack-project-2.onrender.com/api/auth/user/login",{
        email:email,
        password:password,
     },{
        withCredentials: true
     })
     console.log(response.data)
     Navigate("/home")
  }
  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 p-4">
  <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
    
    {/* Heading */}
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
      Login to Your Account
    </h2>
    
    {/* Food Partner Link */}
    <p className="text-center text-gray-500 mb-6">
      Or{" "}
      <Link
        to="/food_partner/login"
        className="text-indigo-600 font-medium hover:underline"
      >
        login as Food Partner
      </Link>
    </p>

    {/* Form */}
    <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
      {/* Email */}
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none shadow-sm"
          required
        />
        
      </div>

      {/* Password */}
      <div className="relative">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none shadow-sm"
          required
        />
        
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
      >
        Login
      </button>
    </form>

    {/* Register Link */}
    <p className="text-center text-gray-500 text-sm mt-6">
      Don’t have an account?{" "}
      <Link
        to="/user/register"
        className="text-indigo-600 font-medium hover:underline"
      >
        Register
      </Link>
    </p>
  </div>
</div>

  );
}
