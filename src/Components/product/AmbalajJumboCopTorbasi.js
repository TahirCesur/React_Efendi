/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function AmbalajJumboCopTorbasi() {
  const { t } = useTranslation();

  return (
    <>
      <SRLWrapper>
        <section className="page-header">
          <div
            className="cta-two__bg"
            style={{
              backgroundImage: "url(assets/images/shapes/footer-bg-1.webp)",
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
              {t("ENDÜSTRİYEL JUMBO ÇÖP TORBASI 80*110")}
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
                    src="assets/images/ambalaj/endustriyel-jumbo-cop-torbasi.webp"
                    alt={t("Jumbo Boy Çöp Torbası")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/ambalaj/endustriyel-jumbo-cop-torbasi.webp"
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
                      {t("ENDÜSTRİYEL JUMBO ÇÖP TORBASI")}
                      <span className="product-details__price">80*110</span>
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
                          {t("Boyut ve Kapasite :")}
                        </li>
                        {t(`Endüstriyel jumbo boy çöp torbaları, büyük hacimli atıkları taşımak için tasarlanmıştır. Genellikle standart çöp torbalarından çok daha büyük boyutlarda ve yüksek kapasiteli olabilirler.`)}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları :")}
                        </li>
                        {t(`İnşaat siteleri, fabrikalar, depolar ve diğer büyük ölçekli endüstriyel tesislerde geniş atık miktarlarını taşımak için kullanılır. Yüksek dayanıklılık, ağır yükleri sorunsuz bir şekilde taşıma yeteneğini sağlar. Genellikle geri dönüştürülebilir malzemelerden üretilir, çevresel sürdürülebilirlik açısından önemlidir. Büyük ölçekli temizlik operasyonları, inşaat atıkları, endüstriyel atıkların taşınması gibi geniş bir uygulama yelpazesine sahiptirler.`)}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Güvenlik ve Hijyen :")}
                        </li>
                        {t(`Bazı modeller, atıkların sızmasını önlemek ve içeriğin hijyenik bir şekilde taşınmasını sağlamak için özel olarak tasarlanmıştır.`)}
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

export default AmbalajJumboCopTorbasi;
