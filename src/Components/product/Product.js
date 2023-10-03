import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import ProductOne from "./ProductOne";
import data from "../../data/product.json";

function Product() {
  const { t } = useTranslation();
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
                      <span
                        className="fas fa-sun fa-2x"
                        style={{ color: "#f9d21c" }}
                      ></span>
                    </div>
                    <h5 className="section-title__tagline">
                      BKB GÜNEŞ SİSTEMLERİ
                    </h5>
                    <h2 className="section-title__title">ÜRÜNLERİMİZ</h2>
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
                      <h3 className="sidebar__title">KATEGORİLER</h3>
                      <ul className="sidebar__category-list list-unstyled">
                        <li>
                          <a href="blog-details.html">Güvenlik</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Ev ve Bahçe</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Reklam Işıkları</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Kırsal Alan</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Özel Alan</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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

export default Product;
