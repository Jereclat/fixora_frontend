import React from "react";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { PreRegister } from "./pages/Auth/PreRegister";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { RoleRoute } from "./components/Auth/RoleRoute";
import { ArtisanDashboard } from "./pages/Dashboard/ArtisanDashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import ArtisanProfile from "./pages/artisanProfile";
import BookingDescription from "./pages/booking/BookingDescription";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreRegister />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route
          path="artisan/dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["artisan"]}>
                <ArtisanDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="user/dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <UserDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="user/artisan-profile"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <ArtisanProfile />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="user/booking-description"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <BookingDescription />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
