import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import AboutPage from "./pages/AboutPage"; 
import AddCarPage from "./pages/AddCarPage";
import CarDetailPage from "./pages/CarDetailPage"; {/* New Route for Car Details */}
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/add-car" element={<AddCarPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/car/:id" element={<CarDetailPage />} /> {/* Route for Car Details */}
      </Routes>
    </Router>
  );
}

export default App;
