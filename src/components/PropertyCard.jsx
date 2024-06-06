// PropertyCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 mb-4"
      onClick={() => {
        navigate(`/property/${property.property_id}`);
      }}
    >
      <img
        src="./property.jpeg"
        alt={property.title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {property.title}
      </h2>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-gray-600 mb-2">Bedrooms: {property.bedrooms}</p>
      <p className="text-gray-600 mb-2">Bathrooms: {property.bathrooms}</p>
      <p className="text-gray-800 font-semibold">${property.price} per month</p>
      {user && <p className="flex justify-between pt-4 items-center">
        <p className="cursor-pointer">👍</p>
        <p className="cursor-pointer">Interested ?</p>
      </p>}
    </div>
  );
}

export default PropertyCard;
