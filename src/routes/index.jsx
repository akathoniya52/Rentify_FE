import React from "react";

import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import HomePage from './pages/HomePage';
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from '../pages/Home'
import App from "../App";
import { MainLayout } from "../Layouts";
// import PropertyListingPage from './pages/PropertyListingPage';
// import PropertyDetailPage from './pages/PropertyDetailPage';
// import UserProfilePage from './pages/UserProfilePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<MainLayout />}>
        <Route path="" element={<App/>} />

        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="home" element={<Home/>} />
      </Route>
    </>
  )
);
