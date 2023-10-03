import React from "react";
import Contact from "../Components/contact/Contact";
import Slider2 from "../Components/common/Slider2";
import Product from "../Components/product/Product";
import Question from "../Components/question/Question";
import About from "../Components/about/About";

function HomePage() {
  return (
    <>
      <Slider2 />
      <About/>
      <Product/>
      <Question/>
      <Contact />
    </>
  );
}

export default HomePage;
