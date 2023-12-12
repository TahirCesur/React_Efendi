// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function TemizlikKolonya() {
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
            <h2 className="page-header__title">{t("KURUM PAS SİLİKAT SÖKÜCÜ YÜKSEK ASİDİK TEMİZLEYİCİ")}</h2>
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
                    src="assets/images/endustriyeltemizlik/kurum-pas-silikat-asidik-temzilmeme-maddesi.webp"
                    alt="KURUM PAS SİLİKAT SÖKÜCÜ YÜKSEK ASİDİK TEMİZLEYİCİ"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyeltemizlik/kurum-pas-silikat-asidik-temzilmeme-maddesi.webp"
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
                      {t("KURUM PAS SİLİKAT SÖKÜCÜ YÜKSEK ASİDİK TEMİZLEYİCİ")}
                      <span className="product-details__price">{t("G-207")}</span>
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
                        {t(
                          "Yoğun pas kalıntısı ya da tabaka haline gelmiş kireçli yüzeylerde sulandırmadan direkt uygulama ile yapılabildiği gibi, yüzeylerdeki yoğunluğa göre 1/3- 1/20 oranlarında su ile seyreltilebilerek hazırlanan solüsyon yüzeylere tatbik edilir. Tekne, gemi, makina daireleri gibi alanlarda %10-20 oranlarında dozajlama yapılarak uygulama yapılır. Ürün yüzeylerde maksimum 10 dk bekletildikten sonra gerek duyulursa fırçalama yapılır ve ardından temiz su ile durulanır. Bakır, galvaniz gibi yumuşak metal yüzeylerde kullanılmaz; alüminyum yüzeylerde ise%15 seyreltme oranı ile hazırlanan solüsyon kullanıldığı takdirde alüminyuma zarar vermez. Tanker, kamyon, tır gibi araçlarda bulunan pas, trafik filmi vb. kalıntıları temizlemek için %10-15 oranında solüsyon hazırlanır. Bu aşamada yüksek basınç ile durulama yapmak gerekebilir. Mermer, doğal taş vb. yüzeylerde kullanıma uygun değildir."
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

export default TemizlikKolonya;
