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
    <div className="flex justify-between">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Explore Properties
      </h1>
      <div>
        {user ? (
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            Hello, {user.first_name}
          </div>
        ) : (
          <div onClick={() => Navigate("/login")} className="cursor-pointer">
            Login
          </div>
        )}
        {toggle && (
          <div>
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
