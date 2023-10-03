import React from "react";
import Aboutus from "../Components/about/Aboutus";
import PageHeader from "../Components/common/PageHeader";
import Contact from "../Components/contact/Contact";
// import Spacer2 from "../Components/common/Spacer2";

function AboutPage() {
  return (
    <>
      <PageHeader title="HAKKIMIZDA" />
      <Aboutus />
      <Contact/>
    </>
  );
}

export default AboutPage;
