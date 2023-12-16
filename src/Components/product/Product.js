/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import ProductOne from "./ProductOne";
import data from "../../data/product.json";
import { Link } from "react-router-dom";

function Product() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <SRLWrapper>
        <section className="about-one">
          <div className="container">
            <div className="blog-page">
              <Container data-aos="fade-up">
                <div className="row">
                  <div
                    className="col-md-12 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="section-title text-center">
                      <div className="section-title__triangle">
                        <img src="assets/images/favicons/icon.ico" alt="icon" aria-label="icon" />
                      </div>
                      <h5 className="section-title__tagline">
                        {t("YENİDÜNYA ENDÜSTRİYEL TEDARİK")}
                      </h5>
                      <h2 className="section-title__title">
                        {t("ÜRÜNLERİMİZ")}
                      </h2>
                      <br />
                      <div className="row">
                        <span className="col-lg-6">
                          <p>
                            <a
                              href="assets/pdf/Yenidünya-Katalog.pdf"
                              download
                              className="sidebar__singles sidebar__download text-center"
                            >
                              <i class="fa fa-download"></i>&nbsp;
                              {t("Yenidünya Endüstriyel PDF İndir")}
                            </a>
                          </p>
                        </span>
                        <span className="col-lg-6">
                          <p>
                            <a
                              href="assets/pdf/Baproy-Bitkisel-Katalog.pdf"
                              download
                              className="sidebar__singles sidebar__download text-center"
                            >
                              <i class="fa fa-download"></i>&nbsp;
                              {t("Baproy Bitkisel PDF İndir")}
                            </a>
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Row>
                  {data.map((product) => {
                    const { picture, id, nav, price } = product;
                    const title = t(product.title);

                    return (
                      <Col md={3} key={id} className="text-center mb-5">
                        <ProductOne
                          picture={picture}
                          title={title}
                          price={price}
                          nav={nav}
                          width={"100%"}
                          height={"auto"}
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

export default Product;
