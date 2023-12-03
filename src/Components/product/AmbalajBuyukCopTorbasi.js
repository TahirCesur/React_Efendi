/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function AmbalajBuyukCopTorbasi() {
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
              {t("ENDÜSTRİYEL BÜYÜK ÇÖP TORBASI 65*80")}
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
                    src="assets/images/ambalaj/endustriyel-buyuk-cop-torbasi.webp"
                    alt={t("Büyük Boy Çöp Torbası")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/ambalaj/endustriyel-buyuk-cop-torbasi.webp"
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
                      {t("ENDÜSTRİYEL BÜYÜK ÇÖP TORBASI")}{" "}
                      <span className="product-details__price">65*80</span>
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
                        {t(`Endüstriyel büyük boy çöp torbaları genellikle standart ev kullanımı torbalarından daha büyük boyutlarda tasarlanmıştır. Çeşitli boyutlarda ve kapasitelerde bulunabilirler, genellikle büyük hacimli atıkları taşımak için uygundur.`)}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları :")}
                        </li>
                        {t(`İnşaat siteleri, fabrikalar ve büyük ölçekli tesislerde yaygın olarak kullanılır. Ağır yükleri taşıma kapasitesine sahiptirler ve bazı modeller kokuları ve sızıntıları kontrol etmek için özelliklere sahiptir. Geri dönüştürülebilir malzemelerden yapılan çöp torbaları, çevresel sürdürülebilirlik açısından önemlidir.`)}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Güvenlik ve Taşıma Kolaylığı :")}
                        </li>
                        {t(`Güvenli taşıma için güçlendirilmiş taşıma kulpları veya askıları bulunabilir. Ayrıca, atıkların sızmasını önlemek ve içeriğin güvenli bir şekilde taşınmasını sağlamak için sızdırmazlık özellikleri de olabilir.`)}
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

export default AmbalajBuyukCopTorbasi;
