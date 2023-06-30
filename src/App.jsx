import React from "react";
import "./font.css";

// components
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Packages from "./components/Packages";
import BestTrip from "./components/BestTrip";
import Blogs from "./components/Blogs";
import Records from "./components/Records";
import Footer from "./components/Footer";
import Develop from "./components/Develop";
import Header2 from "./components/Header2";

const App = () => {
  return (
    <div className="font-sans font bg-red-50	">
      <Navbar />
      <Header2/>
      <Search />
      <Packages />
      <Blogs />
      <BestTrip/>
      <Records />
      <Footer />
      <Develop />
    </div>
  );
};

export default App;
