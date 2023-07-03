import BestTrip from "../components/BestTrip";
import Blogs from "../components/Blogs";
import Develop from "../components/Develop";
import Header2 from "../components/Header2";
import Packages from "../components/Packages";
import Records from "../components/Records";
import Search from "../components/Search";
import React from "react";

const Home = () => {
  return (
    <>
      <Header2 />
      <Search />
      <Packages />
      <Blogs />
      <BestTrip />
      <Records />
    </>
  );
};

export default Home;
