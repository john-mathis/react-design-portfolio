import React from "react";
import "..//src/App.css";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Carousel from "./Components/Carousel/Carousel";
import { CarouselData } from "./Components/Carousel Data/CarouselData";
import Contact from "./Components/Contact/Contact";
import Logo from "./Components/Logo/Logo";

const App = () => {
  return (
    <div>
      <Logo />
      <Header />
      <Skills />
      <About />
      <Carousel slides={CarouselData} />
      <Contact />
      <Logo />
    </div>
  );
};

export default App;
