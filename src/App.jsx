import React from "react";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { PreRegister } from "./pages/Auth/PreRegister";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Project from "./pages/Project"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreRegister />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <Sidebar>
              <Dashboard />
            </Sidebar>
            // </ProtectedRoute>
          }
        />

        <Route
          path="/earnings"
          element={
            <Sidebar>
              <div className="min-h-screen bg-white p-6">
                <h1 className="text-2xl font-bold">Earnings Page</h1>
                <p className="mt-4">This is the Earnings page.</p>
              </div>
            </Sidebar>
          }
        />

        <Route
          path="/job-request"
          element={
            <Sidebar>
              <div className="min-h-screen bg-white p-6">
                <h1 className="text-2xl font-bold">Job Request Page</h1>
                <p className="mt-4">This is the Job Request page.</p>
              </div>
            </Sidebar>
          }
        />

        <Route
          path="/job-histories"
          element={
            <Sidebar>
              <div className="min-h-screen bg-white p-6">
                <h1 className="text-2xl font-bold">Job Histories Page</h1>
                <p className="mt-4">This is the Job Histories page.</p>
              </div>
            </Sidebar>
          }
        />

        <Route
          path="/settings"
          element={
            <Sidebar>
              <div className="min-h-screen bg-white p-6">
                <h1 className="text-2xl font-bold">Settings Page</h1>
                <p className="mt-4">This is the Settings page.</p>
              </div>
            </Sidebar>
          }
        />

        <Route
          path="/profile"
          element={
            <Sidebar>
              <Profile />
            </Sidebar>
          }
        />

        <Route
          path="/logout"
          element={
            <Sidebar>
              <div className="min-h-screen bg-white p-6">
                <h1 className="text-2xl font-bold">Logout Page</h1>
                <p className="mt-4">You have been logged out.</p>
              </div>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
