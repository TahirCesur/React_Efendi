/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function GidaCaykurKamelyaCay() {
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
            <h2 className="page-header__title">{t("ÇAYKUR KAMELYA ÇAY")}</h2>
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
                    src="assets/images/gida/caykur-kamelya-cay.webp"
                    alt="Çaykur Kamelya Çay"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/gida/caykur-kamelya-cay.webp"
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
                    {t("ÇAYKUR KAMELYA ÇAY")}
                      <span className="product-details__price"></span>
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
                          {t("Bilgilendirme")}:
                        </li>
                        {t("Çaykur Kamelya Çay, Türkiye'nin önde gelen çay üreticilerinden biri olan Çaykur tarafından üretilen bir çay markasıdır. Türk çay kültüründe önemli bir yer tutan siyah çay, geleneksel demleme yöntemleriyle hazırlanır. Çaykur Kamelya Çayı daha çok kahvaltılarda ve çay saatlerinde tercih edilmektedir. Yumuşak içimli, hafif ve yoğun aroması olmayan bir çaydır. Karadeniz'in tarlalarından toplanmış olup harmanlanmaya uygun bir çayçeşididir. Kamelya çayı; siyah bir çay olup hafif bir tada sahiptir.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Marka İmajı")}:
                        </li>
                        {t("Çaykur Kamelya Çayı, kaliteli çay üretimi ve güvenilir bir marka imajıyla bilinir. Türkiye genelinde ve uluslararası düzeyde çay tüketicileri arasında popülerdir.Kamelya Çayı genellikle lezzetli, açık renkli ve karakteristik bir Türk çayı tadına sahiptir. Çay kültürü, Türkiye'de sosyal bir aktivite olarak önemli bir yer tutar, ve Kamelya Çayı bu kültüre katkıda bulunan bir markadır.")}
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

export default GidaCaykurKamelyaCay;
