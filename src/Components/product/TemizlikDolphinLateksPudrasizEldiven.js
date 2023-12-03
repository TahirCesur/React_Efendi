// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizlikDolphinLateksPudrasizEldiven() {
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
              {t("DOLPHİN LATEKS PUDRASIZ ELDİVEN")}
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
                    src="assets/images/endustriyeltemizlik/dolphin-lateks-pudrasiz-eldiven.webp"
                    alt={t("Alüminyum Folyo")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/dolphin-lateks-pudrasiz-eldiven.webp"
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
                      {t("DOLPHİN LATEKS PUDRASIZ ELDİVEN")}
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
                          "Lateks pudrasız eldivenler, doğal kauçuktan üretilir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları :")}
                        </li>
                        {t(
                          "Pudra, eldivenin giyilmesini kolaylaştırmak ve cilde yapışmayı önlemek amacıyla kullanılır. Hastaneler, klinikler ve laboratuvarlarda sağlık profesyonelleri tarafından kullanılır. Fabrikalarda, temizlik işlerinde ve endüstriyel uygulamalarda kullanılır."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Pudrasız Tasarım :")}
                        </li>
                        {t(
                          "Pudrasız eldivenler, giyim ve çıkarmada kullanıcılara kolaylık sağlar ve pudra kaynaklı hassasiyetleri azaltır."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Alerji Riski :")}
                        </li>
                        {t(
                          "Lateks alerjisi olanlar için uygun bir seçenektir, çünkü içerisinde lateks bulunmaz."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Esneklik ve Konfor :")}
                        </li>
                        {t("Genellikle esnek ve konforlu bir kullanım sunar.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Dayanıklılık :")}
                        </li>
                        {t(
                          "Lateks eldivenler genellikle elastik ve dayanıklıdır, ancak kullanılan malzeme ve kalınlık üründen ürüne değişebilir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Tek Kullanımlık :")}
                        </li>
                        {t(
                          "Genellikle tek kullanımlıktır ve uygun şekilde atılmalıdır. Çift Ele Uygundur. Kutu Içerisinde 100 Adet Ürün Bulunmaktadır."
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

export default TemizlikDolphinLateksPudrasizEldiven;
