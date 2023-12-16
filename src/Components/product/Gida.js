/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import ProductOne from "./ProductOne";
import data from "../../data/productgida.json";
import { Link } from "react-router-dom";

function Gida() {
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
    <SRLWrapper>
      <section className="blog-one">
        <div className="container">
          <div className="blog-page">
            <Container data-aos="fade-up">
              <div className="row">
                <div className="col-md-12 wow fadeInUp" data-wow-delay="100ms">
                  <div className="section-title text-center">
                    <div className="section-title__triangle">
                      <img src="assets/images/favicons/icon.ico" alt="icon" aria-label="icon" />
                    </div>
                    <h5 className="section-title__tagline">
                      {t("YENİDÜNYA ENDÜSTRİYEL TEDARİK")}
                    </h5>
                    <h2 className="section-title__title">
                      {t("GIDA")}
                    </h2>
                    <br />
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
                  </div>
                </div>
              </div>
              
              <Row>
                <div
                  className="col-xl-3 col-lg-6 wow fadeInLeft"
                  data-wow-delay="400ms"
                >
                  <div className="sidebar sidebar__left">
                    <div className="sidebar__single sidebar__category">
                      <h3 className="sidebar__title">{t("KATEGORİLER")}</h3>
                      <ul className="sidebar__category-list list-unstyled">
                        <li>
                          <Link
                            as={Link}
                            to="/EndustriyelTemizlik"
                            onClick={handleClick}
                          >
                            {t("Endüstriyel Temizlik")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            as={Link}
                            to="/EndustriyelMutfak"
                            onClick={handleClick}
                          >
                            {t("Endüstriyel Mutfak")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            as={Link}
                            to="/EndustriyelKagit"
                            onClick={handleClick}
                          >
                            {t("Endüstriyel Kağıt")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            as={Link}
                            to="/KozmetikUrunleri"
                            onClick={handleClick}
                          >
                            {t("Kozmetik Ürünleri")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            as={Link}
                            to="/BitkiselUrunler"
                            onClick={handleClick}
                          >
                            {t("Bitkisel Ürünler")}
                          </Link>
                        </li>
                        <li>
                          <Link as={Link} to="/Ambalaj" onClick={handleClick}>
                            {t("Ambalaj")}
                          </Link>
                        </li>
                        <li>
                          <Link as={Link} to="/Gida" onClick={handleClick}>
                            {t("Gıda")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {data.map((productgida) => {
                  const { picture, id, nav, price } = productgida;
                  const title = t(productgida.title);

                  return (
                    <Col md={3} key={id} className="text-center mb-5">
                      <ProductOne
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
  );
}

export default Gida;
