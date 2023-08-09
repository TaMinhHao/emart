
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {  Routes, Route } from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import Contact from './Component/Contact';
import About from './Component/About';

function App() {
  return (
    <div> 
    
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

     
    </div>
  );
}

export default App;
