import toast from "react-hot-toast";

export const PropertyFormValidation = (state) => {
  switch (state) {
    case !state.title:
      toast("Enter title..!");
      break;
    case !state.description:
      toast("Enter description..!");
      break;
    case !state.location:
      toast("Enter location..!");
      break;
    case !state.area:
      toast("Enter area..!");
      break;
    case !state.bedrooms:
      toast("Enter description..!");
      break;
    case !state.amenities:
      toast("Enter location..!");
      break;
    case !state.price:
      toast("Enter location..!");
      break;
    default:
      return true;
  }
  return false;
};
