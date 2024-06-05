import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [toggle, setToggle] = useState(false);
  const Navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    Navigate("/login");
  };

  return (
    <div className="flex justify-between p-4 md:p-6 lg:p-8 shadow-lg bg-slate-200">
      <h1 className="text-3xl font-semibold text-gray-800">
        Explore Properties
      </h1>
      <div className="relative"> 
        {user ? (
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            Hello, <b>{user.first_name}</b>
          </div>
        ) : (
          <div onClick={() => Navigate("/login")} className="cursor-pointer">
            Login
          </div>
        )}
        {toggle && (
          <div className="absolute shadow-xl border border-slate-400 bg-slate-200 p-2 rounded-md -left-8 ">
            <div
              onClick={() => Navigate("/profile")}
              className="cursor-pointer"
            >
              Go to Profile
            </div>
            <div onClick={handleLogOut} className="cursor-pointer">
              LogOut
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
