// HomePage.js
import React from "react";
import Slider2 from "../Components/common/Slider2";
import Contact from "../Components/contact/Contact";
import Aboutus from "../Components/about/Aboutus";
import Product1 from "../Components/product/Product1";

function HomePage() {

  return (
    <>
      <Slider2 />
      <Aboutus />
      <Product1 />
      <Contact />
    </>
  );
}

export default HomePage;
