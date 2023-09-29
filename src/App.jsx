import react from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartById from "./pages/CartById/CartById";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Home Page" />} />
          <Route path="/product/:slug" element={<CartById title="Katalog" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
