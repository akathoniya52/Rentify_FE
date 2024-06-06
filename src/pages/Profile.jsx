// App.js
import React, { useEffect, useState } from "react";
import ProfilePage from "../components/ProfilePage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

function Profile() {
  // Dummy user data for testing
  const user = JSON.parse(localStorage.getItem("user"));
  const Navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_BACKEND_URL}/properties/${user.user_id}`,
        });
        if (response.data.status) {
          setProperties(response.data.properties);
          if (response.data.properties.length > 0) {
            toast.success("get all the Properties...!");
          }
        }
      } catch (error) {
        // console.log("error---------->", error);
        toast.error("Something went wrong...!");
      }
    })();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-4 md:p-6 lg:p-8 shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Profile</h1>
        {user.user_type == "seller" && (
          <div
            onClick={() => Navigate("/add-property")}
            className="cursor-pointer"
          >
            Create New Property Post
          </div>
        )}
      </div>
      <div className="container mx-auto px-4 py-8 fxlex flex-col gap-8 ">
        <div>
          <ProfilePage user={user} />
        </div>
        <div className="flex gap-4 flex-wrap pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.length >= 0 &&
              properties.map((property) => (
                  <PropertyCard key={property.property_id} property={property} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
