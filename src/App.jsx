import "./App.css";
import * as React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from './components/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import AboutUs from "./components/pages/AboutUs";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Contact from "./components/pages/Contact";

function App() {

  return (
    <CartProvider>
      <BrowserRouter basename="/React-Final">
        <Navbar />
        <Routes>
          {/* <Route exact path="/" component={ItemListContainer} /> */}
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
