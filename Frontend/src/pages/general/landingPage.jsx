import React from 'react'
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col gap-6 w-11/12 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to <span className="text-purple-600">Zomato Reels</span>
        </h1>
        <p className="text-gray-500">Choose how you want to continue</p>

        <div className="flex flex-col gap-4">
          <Link
            to="/user/login"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login as User
          </Link>

          <Link
            to="/user/register"
            className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Register as User
          </Link>

          <Link
            to="/food_partner/register"
            className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Register as Food Partner
          </Link>

          <Link
            to="/food_partner/login"
            className="w-full py-3 border border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition"
          >
            Login as Food Partner
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage