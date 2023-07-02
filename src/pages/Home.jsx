import BestTrip from "../components/BestTrip";
import Blogs from "../components/Blogs";
import Develop from "../components/Develop";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Records from "../components/Records";
import Search from "../components/Search";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header2 />
      <Search />
      <Packages />
      <Blogs />
      <BestTrip />
      <Records />
      <Footer />
      <Develop />
    </>
  );
};

export default Home;
