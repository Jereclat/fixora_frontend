import React from "react";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { PreRegister } from "./pages/Auth/PreRegister";
import { Register } from "./pages/Auth/Register";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<PreRegister />} />
        <Route path="register" element={<Register />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
