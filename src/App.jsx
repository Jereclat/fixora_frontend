import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PreRegister } from "./pages/Auth/PreRegister";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";

import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { DashboardLayout } from "./components/Layout/DashboardLayout";

import { RoleRoute } from "./components/Auth/RoleRoute";
import { ArtisanDashboard } from "./pages/Dashboard/ArtisanDashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import ArtisanProfile from "./pages/artisanProfile";
import BookingDescription from "./pages/booking/BookingDescription";
import { User } from "./pages/User";

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
