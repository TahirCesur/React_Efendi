/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function AmbalajSizdirmazKapBuyuk() {
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
              {t("SIZDIRMAZ KAP 1000 ML")}
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
                    src="assets/images/ambalaj/sizdirmaz-kap.webp"
                    alt={t("Sızdırmaz Kap")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/ambalaj/sizdirmaz-kap.webp"
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
                      {t("SIZDIRMAZ KAP")}
                      <span className="product-details__price">1000 ML</span>
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
                        {t(
                          "1000 cc, yani 1000 mililitre veya 1 litre hacme sahiptir. Bu, genellikle orta büyüklükteki miktarları saklamak için uygun bir boyuttur. Şeffaf plastik malzemeden üretilmiştir. Bu, içeriği görüntülemeyi ve kolayca tanımlamayı sağlar. Gıda kabının sızdırmaz özelliklere sahip olması, içerideki sıvı veya nemli gıdaların dışarı sızmasını önler. Bu, taze kalıcılığı artırır."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları :")}
                        </li>
                        {t(
                          "Mutfakta geniş bir kullanım alanına sahiptir. Yiyecekleri saklamak, dondurmak veya taşımak için kullanılabilir. Kaliteli plastik malzeme, dayanıklılık ve uzun ömür sağlar. Böylece tekrar tekrar kullanılabilir. Genellikle gıda güvenliği standartlarına uygun olarak üretilir, bu da gıdaların güvenli bir şekilde saklanmasını sağlar. Kapaklı veya kilitli bir kapatma sistemine sahip olabilir. Bu, içeriğin korunmasına ve taşınmasına yardımcı olur."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Güvenlik ve Hijyen :")}
                        </li>
                        {t(
                          "Genellikle gıda güvenliği standartlarına uygun olarak üretilir, bu da gıdaların güvenli bir şekilde saklanmasını sağlar. Kapaklı veya kilitli bir kapatma sistemine sahip olabilir. Bu, içeriğin korunmasına ve taşınmasına yardımcı olur."
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

export default AmbalajSizdirmazKapBuyuk;
