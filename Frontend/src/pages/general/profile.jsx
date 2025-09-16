import React , {useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
export default function Profile() {
   const Navigate = useNavigate()
    const {id}=useParams( );
    const [profile, setprofile] = useState([])
    const [videos, setvideos] = useState([])
    useEffect(() => {
      axios.get(`https://zomato-reel-fullstack-project-2.onrender.com/api/food-partner/${id}`,{withCredentials : true})
    .then((res)=>{
     setprofile(res.data.foodPartner)
     setvideos(res.data.foodPartner.foodItems)
    })
    
    }, [id])
    
  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 p-4">
  {/* Top Section */}
  <div className="bg-white p-6 rounded-3xl shadow-lg mb-6">
    <div className="flex items-center gap-4">
      {/* Profile Picture */}
      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
        {profile?.name?.charAt(0)}
      </div>

      {/* Business Info */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{profile?.name}</h2>
        <p className="text-sm text-gray-500">Address</p>
        <h2 
          onClick={() => Navigate("/home")}
          className="text-indigo-600 font-medium mt-1 cursor-pointer hover:underline"
        >
          Back
        </h2>
      </div>
    </div>

    {/* Stats */}
    <div className="flex justify-between mt-6 bg-gray-100 p-4 rounded-2xl shadow-inner">
     
    </div>
  </div>

  {/* Video Grid as Thumbnails */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
  {videos.map((v) => (
    <div key={v._id} className="overflow-hidden rounded-xl shadow-md">
      <video
        src={v.video}
        muted
        className="w-full h-40 object-cover rounded-xl"
      />
    </div>
  ))}
</div>

</div>

  );
}
