// HomePage.js
import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from backend API
    // Example: fetch('/api/properties').then(response => response.json()).then(data => setProperties(data));
    // Replace the above line with your actual data fetching logic
    // Dummy data for testing
    (async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_BACKEND_URL}/properties`,
        });
        console.log(response.data.properties);
        if (response.data.status) {
          if (response.data.properties.length > 0) {
            setProperties(response.data.properties);
            toast.success("Get all the Properties...!");
          } else {
            toast("No, Properties Found....!");
          }
        }
      } catch (error) {
        toast.error("Something went wrong...!");
      }
    })();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll">
      <Navbar />

      <div className="container mx-auto px-4 py-8 ">
        {properties.length >= 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <div key={index}>
                <PropertyCard key={property.id} property={property} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
