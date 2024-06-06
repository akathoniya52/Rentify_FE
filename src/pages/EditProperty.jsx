import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InputWithLabel from "../components/InputWithLabel";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../components/Loader";

const EditProperty = () => {
  const navigate = useNavigate();
  const params = useParams();
  const propertyState = useSelector((state) => state.propertiesSlice.data);
  const [property, setProperty] = useState(
    propertyState.filter((pro) => pro.property_id === parseInt(params.id))[0]
  );
  const [loading, setLoading] = useState(false);

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
    if (!property) {
      getProperty(params.id);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Function Called");
    try {
      setLoading(true);
      const response = await axios({
        url: `${import.meta.env.VITE_BACKEND_URL}/property/${params.id}`,
        method: "patch",
        data: property,
      });
      if (response.status === 200) {
        toast.success("Property Updated SuccessFully...!");
        navigate("/profile");
      } else {
        toast.error("Something went wrong...! Please try again..!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Add New Property
      </h1>
      {loading && (
        <div className="flex h-full w-full justify-center items-center">
          <Loading />
        </div>
      )}
      {property && (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <InputWithLabel
              label="Property title"
              name="title"
              type="text"
              value={property.title}
              handleChange={handleChange}
              placeholder="title"
            />

            <InputWithLabel
              label="Property Description"
              type="text"
              name="description"
              value={property.description}
              handleChange={handleChange}
              placeholder="Description"
              className="input-field"
              required
            />
            <InputWithLabel
              label="Property Location"
              type="text"
              name="location"
              value={property.location}
              handleChange={handleChange}
              placeholder="Location"
              className="input-field"
              required
            />
            <InputWithLabel
              label="Area of the Property in ( sqft )"
              type="number"
              name="area"
              value={property.area}
              handleChange={handleChange}
              placeholder="Area (sqft)"
              className="input-field"
              required
            />
            <InputWithLabel
              label="Enter no. of Bedrooms"
              type="number"
              name="bedrooms"
              value={property.bedrooms}
              handleChange={handleChange}
              placeholder="Bedrooms"
              className="input-field"
            />
            <InputWithLabel
              label="Enter no. of Bathrooms"
              type="number"
              name="bathrooms"
              value={property.bathrooms}
              handleChange={handleChange}
              placeholder="Bathrooms"
              className="input-field"
              required
            />
            <InputWithLabel
              label="Enter no. of Amenities"
              type="text"
              name="amenities"
              value={property.amenities}
              handleChange={handleChange}
              placeholder="Amenities"
              className="input-field"
              required
            />
            <InputWithLabel
              label="Enter Price of the Property"
              type="number"
              name="price"
              value={property.price}
              handleChange={handleChange}
              placeholder="Price"
              className="input-field"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 mt-4"
          >
            Edit Property
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProperty;
