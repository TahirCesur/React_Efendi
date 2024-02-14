/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import productData from "../../data/product.json"; // Import JSON file

function Product() {
  const { t, i18n } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const responsiveOptions = {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    575: {
      items: 2,
    },
    721: {
      items: 3,
    },
  };

  const pageDescription = "";
  const pageKeywords =
    "PVC Pencere ve kapı sistemleri, Cam balkon sistemleri, alüminyum korkuluk küpeşte sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    // Sayfa dilini belirle
    document.documentElement.lang = i18n.language;

    // Dinamik olarak canonical URL belirle
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/product";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, [i18n.language]);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("Ürünlerimiz")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <div className="bestseller-section bestseller-style-1 sections-spacing">
          <div className="container-fluid">
            <section id="" className="album-list-carousel mb-0">
              <div
                id="111"
                className="content-wrap caption-gradient ali-style-2"
              >
                <div class="section-header">
                  <h2>{t("Ürünlerimiz")}</h2>
                  <p>
                    {t("En yeni trend perde modellerimiz sizleri bekliyor..")}
                  </p>
                </div>
                <ReactOwlCarousel
                  className="owl-carousel dots-rounded dots-outside nav-rounded nav-outside margin-top-30 margin-bottom-30"
                  items={3}
                  margin={20}
                  nav
                  dots={false}
                  responsive={responsiveOptions}
                >
                  {productData.map((product) => (
                    <div key={product.id} className="album-list-item">
                      <Link
                        className="ali-link"
                        onClick={handleClick}
                        as={Link}
                        to={product.nav}
                      >
                        <div className="ali-img-wrap">
                          <div>
                            <img
                              className="img-fluid blur-up lazyload"
                              src={product.picture}
                              alt={t(product.title)}
                              title={t(product.title)}
                            />
                          </div>
                        </div>
                        <div className="ali-caption">
                          <p className="ali-title">{t(product.title)}</p>
                          <div className="ali-meta"></div>
                        </div>
                      </Link>
                      <Link
                        className="ali-link-my"
                        onClick={handleClick}
                        as={Link}
                        to={product.nav}
                      >
                        <p>{product.title}</p>
                      </Link>
                    </div>
                  ))}
                </ReactOwlCarousel>
              </div>
            </section>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default Product;
