import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import HomePage from './pages/HomePage';
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import App from "../App";
import { MainLayout } from "../Layouts";
import Profile from "../pages/Profile";
import PropertyForm from "../pages/PropertyForm";
import { ErrorPage } from "../pages/ErrorPage";
import { getUser } from "../loaders/loader";
import ProtectedLayout from "../Layouts/ProtectedLayout";
// import PropertyListingPage from './pages/PropertyListingPage';
// import PropertyDetailPage from './pages/PropertyDetailPage';
// import UserProfilePage from './pages/UserProfilePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        exact
        path="/"
        errorElement={<ErrorPage />}
        element={<MainLayout />}
      >
        <Route path="" element={<App />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="" loader={getUser} element={<ProtectedLayout/>}>
          <Route path="add-property" element={<PropertyForm />} />
        </Route>
      </Route>
    </>
  )
);
