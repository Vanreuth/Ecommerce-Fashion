import React from "react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Shop from "./Shop";

const Home = () => {
  return (
    <> 
    <Slider/>
      <Banner />
      <Shop/>
    </>
  );
};

export default Home;
