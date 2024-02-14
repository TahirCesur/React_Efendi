/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import PageTitle from "../common/PageTitle";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import SidebarCardOne from "./sidebar/SidebarCard0ne";
import data from "../../data/product.json";

function Product1() {
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
  const pageKeywords = "PVC Pencere ve kapı sistemleri, Cam balkon sistemleri, alüminyum korkuluk küpeşte sistemleri";

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
        <title>{t("PVC Pencere ve Kapı Sistemleri")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <section className="blog-one mt-5">
          <div className="container">
            <div className="blog-page">
              <Container data-aos="fade-up">
                <div className="row">
                  <PageTitle
                    company="ŞEKİR YAPI"
                    title={t("PVC-Cam Balkon-Alüminyum Doğrama Üretim Tesisi")}
                  />
                </div>  

                <Row>
                  
                  {data.map((product) => {
                    const { picture, id, nav, price } = product;
                    const title = t(product.title);

                    return (
                      <Col md={4} key={id} className="text-center mb-4">
                        <SidebarCardOne
                          picture={picture}
                          title={title}
                          price={price}
                          nav={nav}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
}

export default Product1;
