import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartById from "./pages/CartById/CartById";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Home Page" />} />
          <Route path="/product/:slug" element={<CartById title="Katalog" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
