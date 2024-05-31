// PropertyForm.js
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { redirect, useNavigate } from "react-router-dom";

function PropertyForm() {
  const Navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));
  // const { user_id, title, description, location, area, bedrooms, bathrooms, amenities, price } = req.body;
  
  const [formData, setFormData] = useState({
    user_id: user.user_id,
    title: "",
    description: "",
    location: "",
    area: "",
    bedrooms: 0,
    bathrooms: 0,
    amenities: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios({
        url: `${import.meta.env.VITE_BACKEND_URL}/properties`,
        method: "post",
        data:formData
      });
      console.log(result)

      if (result.data.status) {
        toast.success("Property post Successfully");
        setFormData({
          title: "",
          description: "",
          location: "",
          area: "",
          bedrooms: "",
          bathrooms: "",
          amenities: "",
          price: "",
        });
        Navigate('/home')
      }

    } catch (error) {
      toast.error("add Property failed...");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Add New Property
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="input-field"
            required
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="input-field"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="input-field"
            required
          />
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Area (sqft)"
            className="input-field"
            required
          />
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="Bedrooms"
            className="input-field"
          />
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="Bathrooms"
            className="input-field"
            required
          />
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            placeholder="Amenities"
            className="input-field"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="input-field"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 mt-4"
        >
          Add Property Post
        </button>
      </form>
    </div>
  );
}

export default PropertyForm;
