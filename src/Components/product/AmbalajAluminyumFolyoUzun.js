/* eslint-disable jsx-a11y/anchor-has-content */
// AmbalajAluminyumFolyoUzun.js
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function AmbalajAluminyumFolyoUzun() {
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
            <h2 className="page-header__title">{t("ALÜMİNYUM FOLYO UZUN")}</h2>
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
                    src="assets/images/ambalaj/aluminyum-folyo.webp"
                    alt={t("Alüminyum Folyo")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/ambalaj/aluminyum-folyo.webp"
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
                      {t("ALÜMİNYUM FOLYO")}{" "}
                      <span className="product-details__price">
                        {t("UZUN")}
                      </span>
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
                          {t("Nedir?")}
                        </li>
                        {t(
                          "Alüminyum folyo, ince bir tabaka halindeki alüminyumdan yapılan bir malzemedir. Genellikle mutfakta yiyecekleri saklamak, pişirmek veya paketlemek için kullanılır."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Esneklik ve Dayanıklılık :")}
                        </li>
                        {t(
                          "Alüminyum folyo, esnek ve hafif bir malzeme olduğu için kolayca şekil alabilir. Aynı zamanda dayanıklıdır, yüksek sıcaklıklara ve çeşitli koşullara dayanabilir. Alüminyum, iyi bir ısı iletkenidir. Bu nedenle, fırında veya buzdolabında kullanım için uygundur."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Koruyucu Özellikler :")}
                        </li>
                        {t(
                          "Mutfakta yiyecekleri saklamak, pişirmek veya paketlemek için yaygın olarak kullanılır. Isıyı iyi ileten bir malzeme olduğu için fırında kullanılmak üzere uygundur. Ayrıca, yiyecekleri dış etkenlere karşı koruyarak tazeliğini korur. Geri dönüştürülebilir bir malzemedir ve endüstriyel, ambalaj, ve tıbbi alanlarda çeşitli uygulamalara sahiptir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Endüstriyel Kullanımlar :")}
                        </li>
                        {t(
                          "Alüminyum folyo sadece mutfakta değil, aynı zamanda endüstriyel alanlarda da kullanılır. Elektrik yalıtımı, ses yalıtımı, ısı değişim ekipmanları gibi çeşitli uygulamalarda kullanılabilir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Güvenlik ve Kullanım Uyarıları :")}
                        </li>
                        {t(
                          "Alüminyum folyonun doğrudan temasından kaynaklanabilecek kimyasal reaksiyonları önlemek amacıyla bazı yiyecekleri alüminyum folyo ile temas ettirmemek önerilir. Ayrıca, folyonun fırında kullanımı sırasında dikkatli olunmalı ve doğrudan alevle temas ettirilmemelidir."
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

export default AmbalajAluminyumFolyoUzun;
