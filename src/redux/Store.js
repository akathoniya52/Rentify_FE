import { configureStore } from "@reduxjs/toolkit";
import PropertiesSlice from "./PropertiesSlice";

const store = configureStore({
    reducer:{
        propertiesSlice :PropertiesSlice
    }
})

export default store

