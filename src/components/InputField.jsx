import React from "react";

const InputField = ({ name, value, onChange, placeholder, type, icon }) => {
  return (
    <div className=" bg-white flex items-center border-[1px] border-[#757575] gap-3 p-5">
      <img src={`${icon ? icon:"/icons/icon-user.svg"}`} />
      <input
        name={name}
        className="h-[33px] outline-none w-full placeholder:text-[#424242] text-base"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e)=>onChange(e.target.value, name)}
      />
    </div>
  );
};

export default InputField;
