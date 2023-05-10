import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './index.js';
import './index.css';

export default function App() {

  return (
    <div className="App">
    <Navbar />
    <About />
    <Hero />
    <Footer />
    </div>
  );
}





