/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

const Galeri = () => {
  const pageDescription = "Uygulamalarımız";
  const pageKeywords = "Uygulamalarımız";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/uygulamalarimiz";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  // Define an array with image paths
  const imagePaths = Array.from({ length: 32 }, (_, index) => `assets/images/uygulamalarimiz/${index + 1}.webp`);

  return (
    <>
      <Helmet>
        <title>{t("Uygulamalarımız")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <div className="product-single mt-5">
          <div className="container">
            <div className="row">
              {imagePaths.map((path, index) => (
                <div key={index} className="col-sp col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      style={{ borderRadius: "10px" }}
                      src={path}
                      alt={`Uygulamalarımız ${index + 1}`}
                      title={`Uygulamalarımız ${index + 1}`}
                    />
                  </div>
                  <div className="collection-details">
                    <Link
                      to="#"
                      className="collection-title text-center"
                      style={{ fontSize: "16px" }}
                    >
                      {t(`Uygulamalarımız ${index + 1}`)}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default Galeri;
