// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizlikZeminTemizlikOtomatSivisi() {
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
              {t("ZEMİN TEMİZLİK VE OTOMAT SIVISI")}
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
                    src="assets/images/endustriyeltemizlik/zemin-temizlik-otomat-sivisi.webp"
                    alt="ZEMİN TEMİZLİK VE OTOMAT SIVISI"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/zemin-temizlik-otomat-sivisi.webp"
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
                      {t("ZEMİN TEMİZLİK VE OTOMAT SIVISI")}
                      <span className="product-details__price">
                        {t("G-209")}
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
                          {t("Kullanım Alanları")}
                        </li>
                        {t(
                          "Yüzeyleri temizlerken dezenfekte eder. Özellikle besin maddelerinin bulunduğu yerlerde, mutfak ve yiyeceklerin hazırlandığı bölümlerde kullanılır. Qarter amonyum bileşiği içerir. Bakteri ve mantar üremelerinin hızlı olacağı yerlerde üremeyi durdurucu ve üremiş bakterileri öldürücü etkiye sahiptir. Metabolizma ile uyumlu maddelerle formüle edilmiştir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Ürün İçeriği")}
                        </li>
                        {t("Alkol, solvent içerir.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanma Talimatı")}
                        </li>
                        {t(
                          "Küçük yüzeyler için şişeden direkt olarak sıkılabilir. Az miktarda sıvıyı ıslak bir sünger ya da bez üzerine sıkın, lekeli ya da yağlı yüzeyi silin v suyla durulayın. Geniş yüzeyler için bir kova ılık suya 20-40 gr dökün ve yüzeyi bir bez ya da süngerle silin. Gerekli yerleri kurulayın."
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

export default TemizlikZeminTemizlikOtomatSivisi;
