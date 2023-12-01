// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizlikOxyHijyenikMasaTemizlemeBezi() {
  const { t } = useTranslation();

  return (
    <>
      <SRLWrapper>
        <section className="page-header">
          <div
            className="cta-two__bg"
            style={{
              backgroundImage: "url(assets/images/shapes/footer-bg-1.png)",
            }}
          ></div>

          <div className="container">
            <ul className="page-header__breadcrumb list-unstyled">
              <li>
                <a href="index.html">{t("Anasayfa")}</a>
              </li>
              <li>
                <span>{t("ÜRÜNLERİMİZ")}</span>
              </li>
            </ul>
            <h2 className="page-header__title">
              {t("OXY HİJYENİK MASA TEMİZLEME BEZİ")}
            </h2>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-xl-6 wow fadeInLeft"
                data-wow-delay="200ms"
              >
                <div className="product-details__img">
                  <img
                    src="assets/images/endustriyeltemizlik/oxy-hijyenik-masa-temizleme.jpg"
                    alt="OXY HİJYENİK MASA TEMİZLEME BEZİ"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/oxy-hijyenik-masa-temizleme.jpg"
                    ></a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-xl-6 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="product-details__content">
                  <div className="product-details__top">
                    <h3 className="product-details__title">
                      {t("OXY HİJYENİK MASA TEMİZLEME BEZİ")}
                      <span className="product-details__price">{t()}</span>
                    </h3>
                  </div>
                  <div className="product-details__review">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <div className="product-details__divider"></div>
                  <div className="product-details__excerpt">
                    <p className="list-unstyled product-details__description__lists">
                      <ul className="list-unstyled product-details__description__lists">
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Bilgilendirme :")}
                        </li>
                        {t(
                          "Masa, zemin, tezgah, medikal alet ve ekipman gibi yüksek hijyen standardının bir gereklilik olduğu silinebilir tüm yüzey ve alanlarda kullanıma uygun bir üründür. Gıda maddelerinin temas ettiği yüzeylerde kullanıma uygundur. Renksiz, kokusuz hijyenik bir ürün olup kötü koku oluşumuna da engel olur. Her tür su sertliğinde kullanılır. Su, deterjan, mikrofiber bez, paspas vb. tasarruf sağlar. Bir kutuda bulunan 350 + 50 adet mendil ile uzun süre kullanım imkanı sunar."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Şekli")} :
                        </li>
                        {t(
                          "1-2 yaprak çekerek temizlenecek yüzeye uygulama yapınız."
                        )}
                      </ul>
                    </p>
                  </div>

                  <div className="product-details__socials">
                    <h4 className="product-details__socials__title">
                      {t("ARKADAŞLARINLA PAYLAŞ")}
                    </h4>
                    <a href="https://twitter.com/X">
                      <span className="fab fa-twitter"></span>
                    </a>
                    <a href="https://www.facebook.com/">
                      <span className="fab fa-facebook"></span>
                    </a>
                    <a href="https://www.pinterest.com/">
                      <span className="fab fa-pinterest-p"></span>
                    </a>
                    <a href="https://www.instagram.com/">
                      <span className="fab fa-instagram"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
}

export default TemizlikOxyHijyenikMasaTemizlemeBezi;
