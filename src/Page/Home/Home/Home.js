import React from "react";
import AdvertisedLaptops from "../AdvertisedLaptops/AdvertisedLaptops";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedLaptops></AdvertisedLaptops>
      <Categories></Categories>
      <Services></Services>
    </div>
  );
};

export default Home;
