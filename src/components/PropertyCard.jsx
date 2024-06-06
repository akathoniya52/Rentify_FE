// PropertyCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 mb-4"
      onClick={(e) => {
        e.stopPropagation()
        navigate(`/property/${property.property_id}`);
      }}
    >
      {" "}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {property.title}
        </h2>
        {user.user_id===property.user_id && <img src="/icons/edit.svg" onClick={(e)=>{
          e.stopPropagation()
          navigate(`/editproperty/${property.property_id}`)
        }} className="cursor-pointer size-6"/>}
      </div>
      <img
        src="./property.jpeg"
        alt={property.title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <div className="text-gray-600 mb-2">{property.location}</div>
      <div className="text-gray-600 mb-2">Bedrooms: {property.bedrooms}</div>
      <div className="text-gray-600 mb-2">Bathrooms: {property.bathrooms}</div>
      <div className="text-gray-800 font-semibold">${property.price} per month</div>
      {user && (
        <div className="flex justify-between pt-4 items-center">
          <div className="cursor-pointer">👍</div>
          <div className="cursor-pointer">Interested ?</div>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
