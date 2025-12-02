import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PreRegister } from "./pages/Auth/PreRegister";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";

import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { DashboardLayout } from "./components/Layout/DashboardLayout";

import{ Dashboard } from "./pages/Dashboard";
import { User } from "./pages/User";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<PreRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
        
          {/* Dashboard layout wrapper */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
