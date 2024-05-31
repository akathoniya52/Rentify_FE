// HomePage.js
import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import axios from "axios";
import toast from 'react-hot-toast'
import Navbar from "../components/Navbar";


function Home() {
  const [properties, setProperties] = useState([]);
  console.log(properties)


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
        // console.log("Response----------------->",response)
        toast.promise(
          Promise.resolve(response), 

           {
             loading: 'Getting...',
             success: <b>Properties get SuccessFully!</b>,
             error: <b>Could not Get.</b>,
           }
         );
        if (response.data.status) {
          setProperties(response.data.properties);
          toast.success("get all the Properties...!");
        }
      } catch (error) {
        toast.error("Something went wrong...!");
      }
    })();
    // const dummyData = [
    //   { id: 1, title: 'Beautiful Apartment', location: 'New York', bedrooms: 2, bathrooms: 1, price: 2000, imageUrl: 'https://via.placeholder.com/300' },
    //   { id: 2, title: 'Luxury Villa', location: 'Los Angeles', bedrooms: 4, bathrooms: 3, price: 5000, imageUrl: 'https://via.placeholder.com/300' },
    //   // Add more dummy data as needed
    // ];
    // setProperties(dummyData);
  }, []);


  


  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
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
