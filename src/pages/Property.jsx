import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Property = () => {
  const [property, setProperty] = useState();
  const params = useParams();
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const getProperty = async (id) => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/property/${id}`
      );
      if (response.status === 200) {
        toast.success("Property get success..!");
        setProperty(response.data.property);
      } else {
        toast.error("Failed fetch ");
      }
    };
    getProperty(params.id);
  }, []);

  return (
    <div>
      {!property && <div>No Property Found..!</div>}
      {property && (
        <div>
          <div className="fixed inset-0 bg-slate-200 p-4 overflow-y-auto">
            <div className="max-w-screen-lg mx-auto">
              <img
                src="/property.jpeg"
                alt={property.title}
                className="w-full h-96 object-cover mb-4 rounded-md"
              />
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {property.title}
              </h2>
              <p className="text-gray-600 mb-2 flex justify-between items-center">
                <div>
                Location : {property.location}
                </div>
                <div>
                  About : {property.description}
                </div>
              </p>
              <p className="text-gray-600 mb-2">
                Bedrooms: {property.bedrooms}
              </p>
              <p className="text-gray-600 mb-2 flex justify-between items-center">
                <div>Bathrooms: {property.bathrooms}</div>
                <div>Created At : {property.created_at.toString().substring(0,10)}</div>
              </p>
              <p className="text-gray-800 flex justify-between items-center">
                <div className="text-xl font-semibold">
                ${property.price} per month
                </div>
                <div>
                  Last Update : {property.updated_at.toString().substring(0,10)}
                </div>
              </p>
              {user && <button className=" p-2 my-2 rounded-md bg-blue-500 text-white">Interested</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
