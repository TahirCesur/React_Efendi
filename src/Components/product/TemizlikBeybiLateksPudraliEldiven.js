// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizlikBeybiLateksPudraliEldiven() {
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
            <h2 className="page-header__title">{t("BEYBİ LATEKS PUDRALI ELDİVEN")}</h2>
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
                    src="assets/images/endustriyeltemizlik/beybi-lateks-pudralı.webp"
                    alt="BEYBİ LATEKS PUDRALI ELDİVEN"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/beybi-lateks-pudralı.webp"
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
                      {t("BEYBİ LATEKS PUDRALI ELDİVEN")}
                      <span className="product-details__price">
                        {t("S-M-L")}
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
                          {t("Malzeme :")}
                        </li>
                        {t(
                          "Lateks pudralı eldivenler genellikle doğal kauçuktan yapılır."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Pudra Kullanımı :")}
                        </li>
                        {t(
                          "Pudra, eldivenin giyilmesini kolaylaştırmak ve cilde yapışmayı önlemek amacıyla kullanılır. Hastaneler, klinikler ve laboratuvarlarda sağlık profesyonelleri tarafından kullanılır. Fabrikalarda, temizlik işlerinde ve endüstriyel uygulamalarda kullanılır."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Alerji Riski :")}
                        </li>
                        {t(
                          "Lateks alerjisi olan kişiler için risk taşıyabilir. Bu nedenle, lateks alerjisi olan bireyler pudrasız eldivenleri veya lateksi olmayan alternatifleri tercih edebilir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Geri Dönüşüm :")}
                        </li>
                        {t(
                          "Lateks eldivenler genellikle tek kullanımlıktır ve atık yönetimi önemlidir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Alternatifler :")}
                        </li>
                        {t(
                          "Lateks alerjisi olanlar için pudrasız eldivenler veya lateksi içermeyen malzemelerden yapılmış alternatifler tercih edilebilir. Çift Ele uygundur. Kutu Içerisinde 100 Adet Ürün Bulunmaktadır."
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

export default TemizlikBeybiLateksPudraliEldiven;
