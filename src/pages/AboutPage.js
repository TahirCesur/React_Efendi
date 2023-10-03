import React from "react";
import About from "../Components/about/About";
import PageHeader from "../Components/common/PageHeader";
import Contact from "../Components/contact/Contact";
// import Spacer2 from "../Components/common/Spacer2";

function AboutPage() {
  return (
    <>
      <PageHeader title="hakkımızda"/>
      <About />
      <Contact/>
    </>
  );
}

export default AboutPage;
