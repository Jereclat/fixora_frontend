import React from "react";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { PreRegister } from "./pages/Auth/PreRegister";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<PreRegister />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" 
        element= {
          <ProtectedRoute>
            <Dashboard  />
          </ProtectedRoute>
        } />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
