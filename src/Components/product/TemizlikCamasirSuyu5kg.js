// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizlikCamasirSuyu5kg() {
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
              {t("ÇAMAŞIR SUYU 5KG")}
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
                    src="assets/images/endustriyeltemizlik/camasir-suyu-5-lt.webp"
                    alt="ÇAMAŞIR SUYU 5KG"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/camasir-suyu-5-lt.webp"
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
                      {t("ÇAMAŞIR SUYU")}
                      <span className="product-details__price">
                        {t("5KG")}
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
                          {t("Elde Yıkama")}
                        </li>
                        {t(
                          "Deterjan koymayınız. 15 lt soğuk suya 250 gr g 205 İlave ederek çamaşırları bastırınız. 30 dakika bekledikten sonra bol su İle durulayınız. Deterjanı durulama yaptıktan sonra koyunuz."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Otomatik Makinalarda")}
                        </li>
                        {t(
                          "Deterjan koymayınız. Beyaz çamaşırlarınızı makineye doldurup, soğuk su İle kısa programı seçiniz. makine su alırken deterjanı koymadan 500 gr g 205’ ı deterjan gözüne dökünüz. Durulama bittikten sonra düşük ısıda ve ön yıkamasız programda deterjan koyarak yıkama yapınız."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Normal Makinalarda")}
                        </li>
                        {t(
                          "Deterjan koymayınız. Makinenizi soğuk su İle doldurup 500-700 gr g 205 İlave ediniz beyaz çamaşırlarınızı makineye doldurup 15-30 dakika yıkayınız. Sonra bol su İle durulayıp gerekirse deterjanla tekrar yıkayınız."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Genel Ev Temizliğinde")}
                        </li>
                        {t(
                          "Deterjan koymayınız. 15 lt suya 500 gr g 205 ekleyerek mutfak zeminlerini, fayansları, banyo zeminlerini temizleyebilirsiniz. Tuvalet temizliğinde İse 15 lt suya 750-850 gr g 205 İlave ederek genel temizlik yapılır. Gıda maddeleri tüzüğüne göre 40 misli su katıldıktan sonra yalnız bitkisel maddelerden yapılmış çamaşırların beyazlatılmasında kullanılır.  Yünlü, İpekli, suni İpekli, mohair, renklere dayanıksız kumaşlar, rejenere selülozik lif, deri, gümüş ve alüminyum eşyalar üzerinde kullanılmaz. alüminyum, çinko, kalay ve bunların alaşımları İle temas ettirmeyiniz ve asitlerle (tuvalet temizleyiciler, kireç çözücüler vb) karıştırmayınız."
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

export default TemizlikCamasirSuyu5kg;
