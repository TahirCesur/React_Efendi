import Contact from "../Components/contact/Contact";
import Slider2 from "../Components/common/Slider2";
import Product from "../Components/product/Product";
import About from "../Components/about/About";

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Home() {
  const pageTitle = "Şekir Yapı";
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    // Dinamik olarak canonical URL belirleyebilirsiniz.
    const dynamicCanonicalUrl = "https://sekiryapi.com/";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <Slider2 />
      <About />
      <Product />
      <Contact />
    </>
  );
}

export default Home;
