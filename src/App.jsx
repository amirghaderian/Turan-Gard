import "./font.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import About from "./pages/About";

const App = () => {
  return (
    <div className="font-sans font bg-red-50	">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Link />
    </div>
  );
};

export default App;
