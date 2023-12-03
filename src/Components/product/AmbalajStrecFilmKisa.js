/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function AmbalajStrecFilmKisa() {
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
            <h2 className="page-header__title">{t("STREÇ FİLM 30*300M 8 MİKRON")}</h2>
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
                    src="assets/images/ambalaj/strec-film.webp"
                    alt={t("Streç Film")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/ambalaj/strec-film.webp"
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
                      {t("STREÇ FİLM 8 MİKRON")}
                      <span className="product-details__price">30*300M</span>
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
                        {t("Streç film, genellikle plastik polietilen malzemeden üretilen, esnek, yapışkan ve gerilebilir bir film türüdür. Streç film, özellikle ambalajlama ve paletleme süreçlerinde kullanılır. Ürünleri sıkıca sarar ve bir arada tutar. Yüksek esneklik özelliği sayesinde, streç film geniş bir yüzeye yayılabilir ve ürünleri sıkıca sarar. Yüzeylere yapışma özelliği, sarılan ürünleri güvenli bir şekilde tutar ve taşınmasını kolaylaştırır. Streç film, gerilebilir özellikte olduğu için sıkıca çekilebilir ve ürünlerin etrafında sıkı bir şekilde sarılabilir.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları :")}
                        </li>
                        {t("Depolama, taşıma ve sevkiyat süreçlerinde kullanılır. Ayrıca, ürünleri tozdan, nemden ve dış etkenlerden korumak için de kullanışlıdır. Genellikle şeffaf olan streç filmler, ürünleri görüntülemeyi kolaylaştırır. Farklı renk seçenekleri de bulunabilir. Bazı streç filmler geri dönüştürülebilir malzemelerden yapılmış olup çevresel etkiyi azaltabilir. Hem manuel hem de makine uygulamaları için tasarlanmış streç filmler bulunmaktadır. Hem endüstriyel depolama ve taşıma süreçlerinde hem de evde küçük ölçekli ambalajlama işlemlerinde yaygın olarak kullanılır.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Güvenlik ve Hijyen :")}
                        </li>
                        {t("Streç film, ürünlerin güvenli ve düzenli bir şekilde ambalajlanmasını sağlayan pratik ve etkili bir malzemedir.")}                    
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

export default AmbalajStrecFilmKisa;
