import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const reset = () => {
    setIsOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} reset={reset} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </>
  );
}

export default App;
