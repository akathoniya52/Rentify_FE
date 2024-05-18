import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const Navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const [employeeid, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    try {
    } catch {}
  };

  // console.log(employeeid, password);

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
          <form onSubmit={handleSubmit} className="space-y-4 mt-12">
            <div className=" bg-white flex items-center border-[1px] border-[#757575] gap-3 p-5">
              <img src="/icons/icon-user.svg" />
              <input
                className="h-[33px] outline-none w-full placeholder:text-[#424242] text-base"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmployeeId(e.target.value)}
                value={employeeid}
              />
            </div>
            <div className=" bg-white flex items-center border-[1px] border-[#757575] gap-3 p-5">
              <img src="/icons/lock.svg" />
              <input
                className="h-[33px] outline-none w-full placeholder:text-[#424242] text-base font-mono"
                placeholder="********"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
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
            >
              Log-in
              <span>
                <img src="/icons/arrow-right.svg" alt="arrow-icon" />
              </span>
            </button>
          </form>
          <p className="text-center text-xs mt-3 font-normal">
            Having Issues with your Password?
          </p>
          <p className="text-center text-xs text-[#424242] mt-10 font-normal">
            Not an Buyer or Seller?{" "}
            <span className="text-[#212121] text-sm font-semibold cursor-pointer" onClick={()=>{
                Navigate("/signup")
            }}>
              JOIN NOW
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login