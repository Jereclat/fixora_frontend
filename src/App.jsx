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
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<PreRegister />} />

        {/* Authentication routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ARTISAN PROFILE */}

          <Route
            path="artisan/profile"
            element={
              <ProtectedRoute>
              <RoleRoute allowedRoles={["artisan"]}>
                <Profile />
              </RoleRoute>
              </ProtectedRoute>
            }
          />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* ARTISAN DASHBOARD */}
          <Route
            path="artisan/dashboard"
            element={
              <RoleRoute allowedRoles={["artisan"]}>
                <ArtisanDashboard />
              </RoleRoute>
            }
          />


          {/* ARTISAN WALLET */}
          <Route
            path="artisan/wallet"
            element={
              <RoleRoute allowedRoles={["artisan"]}>
                <ArtisanWallet />
              </RoleRoute>
            }
          />

          {/* ARTISAN CATALOGUE */}
          <Route
            path="artisan/catalogue"
            element={
              <RoleRoute allowedRoles={["artisan"]}>
                <ArtisanCatalogue />
              </RoleRoute>
            }
          />

          {/* ARTISAN JOBS */}
          <Route
            path="artisan/jobrequest"
            element={
              <RoleRoute allowedRoles={["artisan"]}>
                <Job /> 
              </RoleRoute>
            }
          />
        </Route>
        {/* user dashboard not wrapped in a dashboard layout */}
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
        <Route
          path="user/priority"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <UserPriority />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
