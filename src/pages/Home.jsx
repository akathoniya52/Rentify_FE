// HomePage.js
import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Home() {
  const [properties, setProperties] = useState([]);
  const [toggle, setToggle] = useState(false);
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Fetch property data from backend API
    // Example: fetch('/api/properties').then(response => response.json()).then(data => setProperties(data));
    // Replace the above line with your actual data fetching logic
    // Dummy data for testing
    (async () => {
      setLoading(true)
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_BACKEND_URL}/properties`,
        });
        if (response.data.status) {
          setProperties(response.data.properties);
          toast.success("get all the Properties...!");
        }
      } catch (error) {
        toast.error("Something went wrong...!");
      }
      setLoading(false)
    })();
    // const dummyData = [
    //   { id: 1, title: 'Beautiful Apartment', location: 'New York', bedrooms: 2, bathrooms: 1, price: 2000, imageUrl: 'https://via.placeholder.com/300' },
    //   { id: 2, title: 'Luxury Villa', location: 'Los Angeles', bedrooms: 4, bathrooms: 3, price: 5000, imageUrl: 'https://via.placeholder.com/300' },
    //   // Add more dummy data as needed
    // ];
    // setProperties(dummyData);
  }, []);
  if(loading){
    return <div>Loading...!</div>
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Explore Properties
        </h1>
        <div>
          {user.user ? (
            <div onClick={() => setToggle(!toggle)}>
              Hello, {user.user.first_name}
            </div>
          ) : (
            <div>Login</div>
          )}
          {toggle && (
            <div>
              <div onClick={() => Navigate("/profile")}>Go to Profile</div>
            </div>
          )}
        </div>
      </div>
      {properties.length >= 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property,index) => (
            <div key={index}>
              <PropertyCard key={property.id} property={property}  />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
