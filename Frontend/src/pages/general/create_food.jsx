import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Create_food() {
     const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    video: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      video: e.target.files[0], // store the File object
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("video", formData.video);

    try {
      const res = await axios.post("https://zomato-reel-fullstack-project-2.onrender.com/api/food", data, {
        withCredentials: true,
      });
      console.log(res.data);
      Navigate("/home")

    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to create food");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-2xl rounded-3xl mt-10">
  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
    Create Food Item
  </h2>

  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Food Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Food Name
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter food name"
        required
        className="w-full rounded-lg border border-gray-400 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white"
      />
    </div>

    {/* Description */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Description
      </label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        placeholder="Enter food description"
        required
        className="w-full rounded-lg border border-gray-400 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white"
      />
    </div>

    {/* Video Upload */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Upload Video
      </label>
      <input
        type="file"
        name="video"
        accept="video/*"
        onChange={handleFileChange}
        required
        className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-orange-400 file:text-white hover:file:bg-orange-500"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
    >
      Create Food
    </button>
  </form>
</div>


  );
}
