import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import ProductOne from "./ProductOne";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Helmet } from "react-helmet";
import { t } from "i18next";

function Product() {
  const pageDescription = "Ürünlerimiz kendi üretim tesislerimizde imal edilmektedir";
  const pageKeywords = "Ürünlerimiz";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/product";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("Ürünlerimiz")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <div className="bestseller-section bestseller-style-1 sections-spacing">
          <div className="container-fluid">
            <ProductOne />
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default Product;
