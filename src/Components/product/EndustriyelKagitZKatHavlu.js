/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelKagitZKatHavlu() {
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
            <h2 className="page-header__title">{t("Z KAT HAVLU")}</h2>
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
                    src="assets/images/endustriyelkagit/z-kat-havlu.webp"
                    alt={t("Z KAT HAVLU")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelkagit/z-kat-havlu.webp"
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
                      {t("Z KAT HAVLU")}
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
                          {t("Bilgilendirme")} :
                        </li>
                        {t("Z kat havlu katlama tekniği, bir Z harfini andıran bir katlama deseni kullanır ve bu, havlunun birbirine geçmiş katmanlardan oluşmasını sağlar. Bu tasarım, kullanıcıların tek bir çekimle tek bir havlu almasını vedaha sonra bir sonraki havluyu hazır hale getirmesini kolaylaştırır.Kullanıcılar, dispenserden çıkardıkları tek bir havlu ile tek bir çekimde bir Z kat havlu alabilirler. Bu, kullanım kolaylığı ve hijyen sağlar.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları")} :
                        </li>
                        {t("Restoranlar, oteller, ofis binaları, alışveriş merkezleri ve diğer yoğun trafiğe sahip alanlarda sıkça kullanılır.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Güvenlik ve Hijyen")} :
                        </li>
                        {t(
                          "Z kat havlu katlama, kullanılan havlunun dışındaki havluların korunmasına yardımcı olur. Bu da kontaminasyonu azaltır ve daha hijyenik bir kullanım sunar. Z kat havlu katlama tekniği, dispenser sistemleri ile uyumlu olacak şekilde tasarlanmıştır. Havlu dispenserlerinden düzenli bir şekilde çıkarılabilir. Bazı Z kat havlu modelleri, geri dönüştürülebilir kağıt malzemelerinden yapılmış olabilir, çevre dostu bir tercih sunar."
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

export default EndustriyelKagitZKatHavlu;
