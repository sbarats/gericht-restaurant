import React from "react";

import {
  AboutUs,
  Chef,
  Contact,
  Gallery,
  Footer,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  FindUs,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
