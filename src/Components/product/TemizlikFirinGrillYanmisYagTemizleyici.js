// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizlikFirinGrillYanmisYagTemizleyici() {
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
              {t("FIRIN IZGARA GRİLL VE YANMIŞ YAĞ TEMİZLEYİCİ")}
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
                    src="assets/images/endustriyeltemizlik/firin-gril-yanmis-yag-temizleyici-fisfis.webp"
                    alt="FIRIN IZGARA GRİLL VE YANMIŞ YAĞ TEMİZLEYİCİ"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/firin-gril-yanmis-yag-temizleyici-fisfis.webp"
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
                      {t("FIRIN IZGARA GRİLL VE YANMIŞ YAĞ TEMİZLEYİCİ")}
                      <span className="product-details__price">{t("M-103")}</span>
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
                        {t("Ocak, fırın, ızgara, grill, fritöz gibi mutfak aletleri üzerinde biriken yanmış yağları ovma, kazıma gerektirmeden kolayca temizler. İçerdiği yağ çözücü kimyasallar, surfaktantlar ve alkali maddeler sayesinde çok süratli ve kolay sonuç alınır. Köpük olarakta kullanıma uygundur. Alüminyum yüzeyler için uygun değildir.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Ürün İçeriği")}
                        </li>
                        {t("Yüzey aktif madde, alkali madde, solvent..")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanma Talimatı")}
                        </li>
                        {t("BAPROY M103 Fırın Temizleme Maddesi 45-50°C’ye ısıtılmış ağır yağlı yüzeylere püskürtülerek direkt uygulanır ve daha iyi sonuç almak için yüzey üzerinde oluşan köpük tabakası bir süre bekletilir. Fırça veya sünger yardımıyla temizlenir ve yüzey durulanır.")}
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

export default TemizlikFirinGrillYanmisYagTemizleyici;
