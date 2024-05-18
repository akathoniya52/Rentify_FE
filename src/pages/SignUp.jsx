import React, { useState } from "react";
import { json, redirect, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    user_type: "seller",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios({
        url: `${import.meta.env.VITE_BACKEND_URL}/users`,
        method: "post",
        data: user,
      });
      console.log("Resuult--------------<>",result);

      if (result.status) {
        toast.success(`${result.message}`);
        setUser({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          user_type: "seller",
          password: "",
        });
        localStorage.setItem('user',JSON.stringify(result.data))
        Navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error(`${user.user_type} not created..! Try Again...!`);
    }
  };

  // model User {
  //   first_name            String
  //   last_name             String
  //   email                 String              @unique
  //   phone_number          String
  //   user_type             UserType
  //  password
  // }

  // console.log(employeeid, password);

  const handleChange = (value, name) => {
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(user);

  return (
    <div className="flex bg-[#F9F9FA] min-h-screen">
      <div className="flex w-full items-center justify-center">
        <div className="lg:w-[30vw]">
          <div className="text-center space-y-2">
            <h2 className="text-[#212121] text-2xl font-bold">Sign-Up</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 mt-12">
            {/* const InputField = ({ name, value, onChange, placeholder, type, icon }) => { */}
            <InputField
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              placeholder="Enter first name"
              type="text"
            />
            <InputField
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
              placeholder="Enter last name"
              type="text"
            />
            <InputField
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email Id"
              type="email"
            />
            <InputField
              name="phone_number"
              value={user.phone_number}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              type="number"
            />
            <div className=" bg-white flex items-center border-[1px] border-[#757575] gap-3 p-5">
              <select
                id="userType"
                className="h-[33px] outline-none w-full placeholder:text-[#424242] text-base"
                value={user.user_type}
                name="user_type"
                onChange={(e) => handleChange(e.target.value, e.target.name)}
              >
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
              </select>
            </div>
            <div className=" bg-white flex items-center border-[1px] border-[#757575] gap-3 p-5">
              <img src="/icons/lock.svg" />
              <input
                name="password"
                className="h-[33px] outline-none w-full placeholder:text-[#424242] text-base font-mono"
                placeholder="********"
                value={user.password}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
              />
            </div>
            <button
              type="submit"
              className="w-full p-5 bg-[#24243E] text-white flex justify-between"
              onClick={handleSubmit}
            >
              Sign-Up
              <span>
                <img src="/icons/arrow-right.svg" alt="arrow-icon" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
