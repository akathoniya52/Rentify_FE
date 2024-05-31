import { redirect } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("user"));


export const getUser = () => {
  
  if (user.user_type !== "seller") {
    return redirect("/login");
  }
  return null;
};
