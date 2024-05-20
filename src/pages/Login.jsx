import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, name) => {
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_BACKEND_URL}/login`,
        method: "post",
        data: user,
      });
      // console.log("response----->", response);
      if (response.data.status===true) {
        toast.success("User Logged In SuccessFully.!");
        const user = response.data.user;
        delete user.password_hash;
        localStorage.setItem("user", JSON.stringify(user));
        setUser({
          email: "",
          password: "",
        })
        navigate("/home");                  
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <div className="flex bg-[#F9F9FA] h-screen">
      <div className="bg-loginbg w-[40vw] px-10 md:flex justify-center items-center hidden ">
        <img src="./Logo-light.svg" />
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="lg:w-[30vw]">
          <div className="text-center space-y-2">
            <h2 className="text-[#212121] text-2xl font-bold">Log-in</h2>
          </div>
          <div className="space-y-4 mt-12">
            <div className=" bg-white flex items-center border-[1px] border-[#757575] gap-3 p-5">
              <img src="/icons/icon-user.svg" />
              <input
                className="h-[33px] outline-none w-full placeholder:text-[#424242] text-base"
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={user.email}
                required
              />
            </div>
            <div className=" bg-white flex items-center border-[1px] border-[#757575] gap-3 p-5">
              <img src="/icons/lock.svg" />
              <input
                className="h-[33px] outline-none w-full placeholder:text-[#424242] text-base font-mono"
                placeholder="********"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={user.password} // Ensure the value is linked to the state
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-[#9E9E9E] cursor-pointer"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </p>
            </div>
            <button
              type="submit"
              className="w-full p-5 bg-[#24243E] text-white flex justify-between"
              onClick={handleSubmit}
            >
              Log-in
              <span>
                <img src="/icons/arrow-right.svg" alt="arrow-icon" />
              </span>
            </button>
          </div>
          <p className="text-center text-xs mt-3 font-normal">
            Having Issues with your Password?
          </p>
          <p className="text-center text-xs text-[#424242] mt-10 font-normal">
            Not an Buyer or Seller?{" "}
            <span
              className="text-[#212121] text-sm font-semibold cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              JOIN NOW
            </span>
          </p>
          <p className="text-center text-xs text-[#424242] mt-10 font-normal">
            <span
              className="text-[#212121] text-sm font-semibold cursor-pointer"
              onClick={() => {
                navigate("/home");
              }}
            >
              Login Later
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
