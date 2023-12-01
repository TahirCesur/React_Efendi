/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function About() {
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
    <section className="about-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-four__thumb">
              <div
                className="about-four__thumb__item wow fadeInUp"
                data-wow-delay="200ms"
              >
                <img src="assets/images/Hakkımızda.jpg" alt="Hakkımızda" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-one__content">
              <div className="section-title">
                <div className="section-title__triangle">
                  <img src="assets/images/favicons/icon.ico" alt="icon" />
                </div>
                <h5 className="section-title__tagline">
                  {t("YENİDÜNYA ENDÜSTRİYEL TEDARİK")}
                </h5>
                <h2 className="section-title__title">{t("HAKKIMIZDA")}</h2>
              </div>
              <p className="about-one__content__text">
                {t(
                  "Yenidünya Endüstriyel Tedarik Firması, yüksek kaliteli endüstriyel malzemelerin güvenilir tedarikçisidir. Yenidünya Endüstriyel Tedarik Firması 2018 yılında kurulmuş ve başından itibaren endüstriyel sektörde müşterilerimize mükemmel hizmet sunma misyonunu benimsemiştir. Firma merkezimiz Bursa Türkiye konumundadır ve ulusal ve uluslararası müşterilere hizmet vermektedir."
                )}
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="about-one__box">
                    <div className="about-one__box__top">
                      <h4 className="about-one__box__title">
                        {t("ÜCRETSİZ DANIŞMANLIK ALIN")}
                      </h4>
                      <div className="about-one__box__icon">
                        <span className="icon-customer-support"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-one__box">
                    <div className="about-one__box__top">
                      <h4 className="about-one__box__title">
                        {t("YÜKSEK KALİTELİ ÜRÜNLER")}
                      </h4>
                      <div className="about-one__box__icon">
                        <span className="icon-good-quality"></span>
                      </div>
                    </div>
                    <p className="about-one__box__text"></p>
                  </div>
                </div>
              </div>
              <div className="about-one__progress">
                <h4 className="about-one__progress--title"></h4>
              </div>
              <Link
                as={Link}
                to="/aboutus"
                className="nisoz-btn"
                onClick={handleClick}
              >
                <span className="nisoz-btn__shape"></span>
                <span className="nisoz-btn__shape"></span>
                <span className="nisoz-btn__shape"></span>
                <span className="nisoz-btn__shape"></span>
                <span className="nisoz-btn__text">
                  {t("Daha fazlasını Keşfet")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
