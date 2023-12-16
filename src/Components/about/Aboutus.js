/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Aboutus() {
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
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <div className="section-title__triangle">
                <img src="assets/images/favicons/icon.ico" alt="icon" aria-label="icon"/>
              </div>
              <h5 className="section-title__tagline">
                {t("YENİDÜNYA ENDÜSTRİYEL TEDARİK")}
              </h5>
              <h2 className="section-title__title">{t("HAKKIMIZDA")}</h2>
            </div>
            <div className="col-lg-6">
              <div className="about-four__thumb">
                <div
                  className="about-four__thumb__item wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <img
                    src="assets/images/hakkimizda.webp"
                    alt="Hakkımızda"
                    
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                <br />
                <p className="about-one__content__text">
                  {t(
                    "Yenidünya Endüstriyel Tedarik Firması, yüksek kaliteli endüstriyel malzemelerin güvenilir tedarikçisidir. Yenidünya Endüstriyel Tedarik Firması 2018 yılında kurulmuş ve başından itibaren endüstriyel sektörde müşterilerimize mükemmel hizmet sunma misyonunu benimsemiştir. Firma merkezimiz Bursa Türkiye konumundadır ve ulusal ve uluslararası müşterilere hizmet vermektedir."
                  )}
                </p>
                <p className="about-one__content__text">
                  <h3>{t("Vizyonumuz")}</h3>
                  {t(
                    "Yenidünya Endüstriyel Tedarik Firması olarak vizyonumuz, endüstriyel ihtiyaçlarınızı en iyi şekilde karşılamak için güvenilir, yenilikçi ve sürdürülebilir çözümler sunmaktır. Müşterilerimizin beklentilerini aşmayı ve sürekli olarak mükemmelliği hedeflemeyi taahhüt ediyoruz."
                  )}
                  <br />
                  <br />
                  <h3>{t("Değerlerimiz")}</h3>
                  {t(
                    "Firmanın temel değerleri arasında dürüstlük, kalite, müşteri memnuniyeti, çevre duyarlılığı ve iş ahlakı bulunmaktadır. Müşterilerimizin işlerini büyütmelerine yardımcı olmak ve uzun vadeli iş ilişkileri inşa etmek için bu değerlere bağlıyız."
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
