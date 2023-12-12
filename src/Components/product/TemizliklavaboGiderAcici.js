// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizliklavaboGiderAcici() {
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
            <h2 className="page-header__title">{t("LAVABO GİDER AÇICI")}</h2>
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
                    src="assets/images/endustriyeltemizlik/lavabo-gider-acici.webp"
                    alt="LAVABO GİDER AÇICI"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/lavabo-gider-acici.webp"
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
                      {t("LAVABO GİDER AÇICI")}
                      <span className="product-details__price">{t("G-211")}</span>
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
                          {t("Kullanım Talimatı")}
                        </li>
                        {t(
                          "Ürünü tıkanmış gidere 100 gr dan başlayarak uygulayınız. Üzerine bol miktarda soğuk su dökünüz. Uygulama esnasında oluşan buharı solumayınız."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Risk ve Güvenlik İbareleri")}
                        </li>
                        {t(
                          "R35: Ciddi yanıklara neden olabilir. R36/38: Gözleri ve cildi tahriş edicidir. S2: çocukların ulaşabileceği yerlerden uzak tutunuz. S20: kullanım sırasında herhangi bir şey yemeyiniz ve içmeyiniz. S24/25: göz ve cilt temasında kağıt havlu ile kurulayıp derhal doktora başvurunuz. s36/37/39: uygun koruyucu giysi, koruyucu eldiven, koruyucu gözlük, maske kullanınız. S45: kaza halinde veya kendinizi iyi hissetmiyorsanız, hemen doktora başvurunuz ve ambalaj etiketini gösteriniz. s56: atıklarını ve kabını tehlikeli veya özel atık. Toplama yerlerinde bertaraf ediniz/ettiriniz. s64: yutulması halinde kusturmayınız. Ağzı bol su ıle yıkayınız. (sadece kişinin bilinci yerinde ise)"
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Ürün Bileşimi")}
                        </li>
                        {t("%30 Sülfirik asit")}
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

export default TemizliklavaboGiderAcici;
