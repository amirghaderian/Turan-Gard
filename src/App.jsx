import "./font.css";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import React from "react";
import About from "./pages/About/About";

const App = () => {
  return (
    <div className="font-sans font bg-red-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Link />
    </div>
  );
};

export default App;
