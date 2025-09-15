import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';


export default function Home() {
  const [videos, setvideos] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/api/food",{withCredentials:true})
    .then((res)=>{
      setvideos(res.data.foodItems)
    })
  },[])
  
  
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-black">
  {videos.map((item) => (
    <div
      key={item._id}
      className="relative h-screen w-screen flex items-center justify-center snap-start"
    >
      {/* Background video */}
      <video
        src={item.video}
        className="h-full w-full object-cover brightness-75"
        autoPlay
        loop
        muted
      />

      {/* Overlay for description + button */}
      <div className="absolute bottom-16 w-full px-6 flex flex-col items-center text-center space-y-3">
        <p className="text-white text-lg font-semibold line-clamp-2 drop-shadow-md">
          {item.description}
        </p>
        <Link
          to={`/profile/${item.foodpartner}`}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transform transition duration-300"
        >
          Visit Store
        </Link>
      </div>
    </div>
  ))}
</div>
  )
}
