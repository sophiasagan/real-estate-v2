import React, { useEffect, useLayoutEffect, useState } from "react";
import { Route, Switch, useLocation } from 'react-router-dom';
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ListingsSection from "./components/Listings";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const reset = () => {
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} reset={reset} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <ListingsSection slides={SliderData} />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </>
  );
}

export default App;
