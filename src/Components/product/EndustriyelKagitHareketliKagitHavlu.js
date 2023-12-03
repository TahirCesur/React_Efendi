// EndustriyelKagitHareketliKagitHavlu.jsx
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelKagitHareketliKagitHavlu() {
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
            <h2 className="page-header__title">{t("HAREKETLİ KAĞIT HAVLU 21 CM")}</h2>
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
                    src="assets/images/endustriyelkagit/kagit-havlu.webp"
                    alt={t("Hareketli Kağıt Havlu")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelkagit/kagit-havlu.webp"
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
                      {t("HAREKETLİ KAĞIT HAVLU")}
                      <span className="product-details__price">21 CM</span>
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
                          {t("Bilgilendirme")} :
                        </li>
                        {t("Hareketli kağıt havlu sistemleri genellikle sensörlerle donatılmıştır. Kullanıcı ellerini sensörün önüne getirdiğinde, sistem otomatik olarak bir belirli uzunluktaki kağıt havluyu keser ve dağıtır. Kağıt havlu, genellikle el ve yüz temizliği için kullanılan, ince ve hafif bir kağıt malzemeden yapılan temizlik ürünüdür. Kağıt havlular, tek katmanlı veya çok katmanlı olabilir. Çeşitli kalınlıklarda ve dokularda bulunurlar, bu da farklı kullanım ihtiyaçlarına cevap verebilmelerini sağlar. Ayrıca, rulo modeller de bulunur, bu tür havlular özellikle mutfaklarda yaygın olarak kullanılır. Katlı kağıt havlular, genellikle daha dayanıklı ve emicidir. Tekli çekim modeller ise daha yaygın ve hızlı kullanım için tasarlanmıştır.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları")} :
                        </li>
                        {t("Kağıt havlular genellikle mutfaklarda, banyolarda, ofislerde ve halka açık alanlarda kullanılır. El ve yüz temizliği, sıvı dökülmelerinin temizlenmesi gibi çeşitli amaçlar için kullanılır.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Güvenlik ve Hijyen")} :
                        </li>
                        {t("Kağıt havlular genellikle elleri kurulamak, yüzü temizlemek veya sıvı dökülmeleri temizlemek için kullanılır. Hijyen standartlarını koruma ve pratik kullanım sağlama amacı taşırlar. Hareketli kağıt havlu dağıtım sistemleri, otomatik sensörlerle çalışarak kullanıcılara temassız bir şekilde kağıt havlu sağlar.")}
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

export default EndustriyelKagitHareketliKagitHavlu;
