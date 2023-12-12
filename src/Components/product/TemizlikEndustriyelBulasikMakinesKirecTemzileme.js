// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizlikEndustriyelBulasikMakinesKirecTemzileme() {
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
                <span>{t("ÜRÜNLERİMİZ")}</span>""
              </li>
            </ul>
            <h2 className="page-header__title">{t("ENDÜSTRİYEL BULAŞIK MAKİNASI KİREÇ TEMİZLEME VE BAKIM")}</h2>
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
                    src="assets/images/endustriyeltemizlik/bulasik-makinesi-kireç-temzileme-bakim.webp"
                    alt="ENDÜSTRİYEL BULAŞIK MAKİNASI KİREÇ TEMİZLEME VE BAKIM"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/bulasik-makinesi-kireç-temzileme-bakim.webp"
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
                      {t("ENDÜSTRİYEL BULAŞIK MAKİNASI KİREÇ TEMİZLEME VE BAKIM ÜRÜNÜ")}
                      <span className="product-details__price">{t("M-106")}</span>
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
                        {t("Sert su kullanılan yerlerde bulaşık makinesi, çay kahve makineleri içerisinde ve serpantinlerinde zamanla kireç oluşur. BAPROY M106 ile yapılan yıkamayla kireç birikimleri temizlenir. Makinenin verimli çalışmasını, enerji tasarrufu ve hijyenik temizlik sağlar. Kirecin temizlenmesi hijyeni sağlar. Bakır ve alüminyum için uygun değildir.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Ürün İçeriği")}
                        </li>
                        {t("İnorganik asitler, korozyon inhibitörü içerir.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanma Talimatı")}
                        </li>
                        {t("Dozaj pompası hortumu, bulaşık yıkama maddesi bidonundan çıkarılır. Makine içine su alınır, 50-60°C’ye kadar ısıtılır. Kireç yoğunluğuna göre 50-100 gr/lt BAPROY M106 eklenir ve makine 20-30 dak. çalıştırılır. Eğer yeterli gelmezse, işlem tekrarlanır. Su boşaltılır ve iyice durulanır.")}
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

export default TemizlikEndustriyelBulasikMakinesKirecTemzileme;
