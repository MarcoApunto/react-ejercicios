import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
