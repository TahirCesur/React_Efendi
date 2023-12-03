/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function YogunBronzlastiriciYag() {
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
            <h2 className="page-header__title">{t("LOPREN YOĞUN BRONZLAŞTIRICI YAĞ")}</h2>
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
                    src="assets/images/lopren/bronzlastirici-yag.webp"
                    alt="YOĞUN BRONZLAŞTIRICI YAĞ"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/lopren/bronzlastirici-yag.webp"
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
                    {t("LOPREN YOĞUN BRONZLAŞTIRICI YAĞ")}
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
                          {t("Faydaları")} :
                        </li>
                        {t("İçerisinde bulunan Hindistan cevizi, havuç, kakao yağı ve E vitamini ile kısa sürede bronzluk sağlar.")}
                        <li>
                        <span className="icon-right-arrow"></span>
                          {t("İçindekiler")}:
                        </li>
                        Paraffinum Liquidum, Daucus Carota Sativa Seed
                        Oil,Theobroma Ccao Oil, Cocos Nucifera (Coconut)
                        Oil,Simmondsia Chinensis (Jojoba) Seed Oil, Parfum,
                        TocopherolAcetate
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Şekli ve Uyarıları")} :
                        </li>
                        {t("Uygulamadan önce vücudunuzun kumdan arınmış ve temiz olduğundan emin olunuz. Avuç içinizi dolduracak miktar dayağı alınız ve ellerinizi birbirinize sürünüz. Yağı yumuşak bir masaj hareketi ile tüm vücudunuza uygulayınız. Güneşe çıkmadan 15 - 30 dakika önce cilde eşit miktarda dağıtarak uygulayınız. Güneşte uzun süre kalınması durumunda uygulamayı 2 saatte bir tekrarlayınız. Bu ürün güneşten koruyucu bir ürün değildir. Dikkatli ve kullanım talimatına uygun kullanınız. Ürününüzü direkt güneş ışığına maruz bırakmayınız aşırı sıcaktan koruyunuz. Ürünü göz çevresine uygulamayınız göz ile temasından kaçınınız. Temas etmesi durumunda bol su ile yıkayınız. Kullandıktan sonra ağzını sıkıca kapatınız. Çocukların ulaşamayacağı yerde saklayınız. Ürünün yutulması veya kullanımı ile meydana gelebilecek istenmeyen bir etki ile karşılaşılması durumunda doktora danışınız.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Saklama Koşulları")} :
                        </li>
                        {t(
                          "Ürünü +5°C ve +25°C arasında oda sıcaklığında saklayınız."
                        )}
                        <br />
                        <br />
                        <li>
                          <span className="fa fa-star"></span>
                          {t("Lütfen Dikkat")} :
                          {t("Kullanım Talimatını Okuyunuz")}!..
                          <br />
                        </li>
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

export default YogunBronzlastiriciYag;
