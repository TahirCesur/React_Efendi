// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function BitkiselUrunlerBaproyBitkiselBiberonEmzikTemzileyici() {
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
              {t("BAPROY BİTKİSEL BİBERON VE EMZİK TEMİZLEYİCİ")}
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
                    src="assets/images/bitkisel/bitkisel-biberon-emzik-temizleyici.webp"
                    alt="BAPROY BİTKİSEL BİBERON VE EMZİK TEMİZLEYİCİ"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/bitkisel/bitkisel-biberon-emzik-temizleyici.webp"
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
                      {t("BAPROY BİTKİSEL BİBERON VE EMZİK TEMİZLEYİCİ")}
                      <span className="product-details__price">
                        {t("BİTKİSEL")}
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
                          {t("Neden BAPROY Bitkisel ?")}
                        </li>
                        {t(
                          "BOYA, PARFÜM, GDO, SLES, FOSFAT, KLOR, SLS ve PARABEN içermez."
                        )}<br/>
                        {t("Baproy Baby Bitkisel Emzik Biberon Temizleyici, bebek malzemelerinin temizliğinde güvenle kullanılır. Yağlardan, kirlerden arındırır, kolayca durulanır." )}
                        <br/>
                        {t("Doğaya duyarlı sürdürülebilir üretim sistemleri ile imal edilmiştir.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Tüketicinin Dikkatine")}
                        </li>
                        {t(
                          "Çocukların ulaşamayacağı yerde saklayınız. Orjinal ambalajında serin, iyi havalandırılmış, kuru ve kapalı yerde saklayınız. Çamaşırların üzerine direkt dökmeyiniz."
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

export default BitkiselUrunlerBaproyBitkiselBiberonEmzikTemzileyici;
