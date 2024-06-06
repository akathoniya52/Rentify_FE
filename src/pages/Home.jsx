// HomePage.js
import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/PropertiesSlice";
import Loader from '../components/Loader'

function Home() {
  const properties1 = useSelector((state) => state.propertiesSlice.data);
  const dispatch = useDispatch();
  const [properties, setProperties] = useState(properties1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (properties.length === 0) {
      (async () => {
        try {
          setLoading(true);

          const response = await axios({
            method: "get",
            url: `${import.meta.env.VITE_BACKEND_URL}/properties`,
          });
          // console.log(response.data.properties);
          if (response.data.status) {
            if (response.data.properties.length > 0) {
              setProperties(response.data.properties);
              dispatch(setData(response.data.properties));
              toast.success("Get all the Properties...!");
            } else {
              toast("No, Properties Found....!");
            }
          }
        } catch (error) {
          toast.error("Something went wrong...!");
        }finally{
          setLoading(false);
        }
      })();
    }
  }, []);

  return (
    <div className="h-screen overflow-y-scroll">
      <Navbar />
        {loading && <div className="h-full flex justify-center items-center"><Loader/></div>}
      <div className="container mx-auto px-4 py-8 ">
        {!loading && properties.length===0 && <div>No Property Found...!</div>}
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
