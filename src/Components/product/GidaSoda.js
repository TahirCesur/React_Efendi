/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";


function GidaSoda() {
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
            <h2 className="page-header__title">{t("SODA")}</h2>
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
                  <img src="assets/images/gida/soda.webp" alt="Soda" />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/gida/soda.webp"
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
                      {t("SODA")}
                      <span className="product-details__price">
                        {t("ŞİŞE")}
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
                          {t("Bilgilendirme")}:
                        </li>
                        {t(
                          "Maden suyu, genellikle doğal kaynaklardan elde edilen ve belirli mineraller içeren içme suyu türüdür. Bu su türü genellikle doğal gazlıdır, yani içinde çözülmüş karbondioksit gazı bulunur."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Soda ile Maden Suyu Arasındaki Fark")}:
                        </li>
                        {t(
                          "Maden suları, içerdikleri mineral içeriğine bağlı olarak farklılık gösterebilir. Sodyum, kalsiyum, magnezyum, potasyum ve diğer mineraller maden sularında bulunabilir. Maden suyu, içerdiği karbon dioksit gazı nedeniyle gazlıdır. Bu gazlılık, içeceğin karakteristik bir özelliğidir ve tadını belirler. Maden suyu ve soda arasındaki temel fark, maden suyunun doğal kaynaklardan elde edilmesi ve içerdiği minerallerdir. Soda, genellikle karbonatlı suya eklenen tatlandırıcılar ve aromalar içerir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>{t("Yararları")} :
                        </li>
                        {t("Maden sularının içerdikleri mineraller nedeniyle bazı sağlık yararları olabilir. Örneğin, kalsiyum ve  magnezyum içeren maden suları, kemik sağlığını destekleyebilir.Maden suyu, içerdiği mineraller ve özgün tat profili ile dünya genelinde popüler bir içecektir. Farklı marka ve kaynaklardan gelen maden suları, içerdikleri minerallere, gaz miktarına ve lezzet profillerine göre çeşitlilik gösterebilir.")}
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

export default GidaSoda;
