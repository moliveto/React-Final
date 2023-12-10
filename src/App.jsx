import "./App.css";
import * as React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/product" element={<ItemListContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
