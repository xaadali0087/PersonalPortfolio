import React from "react";
import Cards from "./cards";
import ExploreService from "./exploreService";
import OurPartner from "./OurPartner";
import FewReasons from "./fewReasons";
import HowWork from "./howWork";
import OurSpecialization from "./ourSpecialization";
import Header from "./header";
import Projects from "./projects";


const Home = () => {

  return (
    <>
      <Header />
      <Cards />
      <OurSpecialization />
      <ExploreService />
      {/* <OurPartner /> */}
      <FewReasons />
      <Projects />
      <HowWork />
    </>
  );
};

export default Home;
