import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import ProductOne from "./ProductOne";
import data from "../../data/productambalaj.json";

function ProductSimilarAmbalaj() {
  const { t } = useTranslation();

  return (
    <>
      <section class="product mt--120">
        <div class="container">
          <div class="section-title">
            <div class="section-title__triangle">
              <img src="assets/images/favicons/icon.ico" alt="icon" />
            </div>
            <h5 className="section-title__tagline">
              {t("YENİDÜNYA ENDÜSTRİYEL TEDARİK")}
            </h5>
            <h2 class="section-title__title">{t("BENZER ÜRÜNLER")}</h2>
          </div>
          <div class="nisoz-owl__dots nisoz-owl__carousel ">
            <Row>
              {data.map((productambalaj) => {
                const { picture, id, nav, price } = productambalaj;
                const title = t(productambalaj.title);

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
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSimilarAmbalaj;
