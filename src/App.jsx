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
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { ArtisanWallet } from "./pages/ArtisanWallet";
import ArtisanCatalogue from "./pages/ArtisanCatalogue";
import Job from "./pages/Job";
import UserPriority from "./pages/booking/UserPriority";
import Profile from "./pages/Profile";
import BookingProgress from "./pages/booking/BookingProgress";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<PreRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* AUTHENTICATED */}
        <Route element={<ProtectedRoute />}>
          {/* ARTISAN */}
          <Route element={<RoleRoute allowedRoles={["artisan"]} />}>
            <Route element={<DashboardLayout />}>
              <Route path="artisan/dashboard" element={<ArtisanDashboard />} />
              <Route path="artisan/wallet" element={<ArtisanWallet />} />
              <Route path="artisan/catalogue" element={<ArtisanCatalogue />} />
              <Route path="artisan/jobrequest" element={<Job />} />
              <Route path="artisan/profile" element={<Profile />} />
            </Route>
          </Route>

          {/* USER */}
          <Route element={<RoleRoute allowedRoles={["user"]} />}>
            <Route path="user/dashboard" element={<UserDashboard />} />
            <Route path="user/artisan-profile" element={<ArtisanProfile />} />
            <Route
              path="user/booking-description"
              element={<BookingDescription />}
            />
            <Route path="user/priority" element={<UserPriority />} />
            <Route path="user/progress" element={<BookingProgress/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
