import React, { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
const [cartItems, setCartItems] = useState([]);
const location = useLocation();

  return (
    <div>
      <Navbar />
      <hr className="-mt-6 mb-2 " />
      {location.pathname !== '/products' && <Hero />}
      <Routes>
        <Route path="/products" element={<Products cartItems={cartItems} />} />
        <Route path="/" element={<Main setCartItems={setCartItems} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;