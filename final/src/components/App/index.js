import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar";
import ProductsPage from "./../pages/ProductsPage";
import AboutPage from "./../pages/AboutPage";
import WorkPage from "./../pages/WorkPage";
import ProductPage from "./../pages/ProductPage";

import CartContext from "../../contexts/CartContext";

import "./App.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
