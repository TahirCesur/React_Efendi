/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function PeelingMaskeCiltBakimSerumu() {
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
              {t("AHA %10 + BHA %2 PEELİNG MASKE CİLT BAKIM SERUMU")}
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
                    src="assets/images/lopren/b-peeling-maske-cilt-bakim-serumu.webp"
                    alt="AHA %10 + BHA %2 PEELİNG MASKE CİLT BAKIM SERUMU"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/lopren/b-peeling-maske-cilt-bakim-serumu.webp"
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
                    {t("AHA %10 + BHA %2 PEELİNG MASKE CİLT BAKIM SERUMU")}
                      <span className="product-details__price">30 ML</span>
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
                        {t("Aha asitleri ciltte peeling yaparak ölü deriyi uzaklaştırırlar. Cilt daha aydınlık ve canlı gözükür. Bha asiti tıkanmış gözenekleri arındırır. Akne, siyah nokta ve sivilce oluşumunu önlemeye yardımcı olur.")}
                        <li>
                        <span className="icon-right-arrow"></span>
                          {t("İçindekiler")}:
                        </li>
                        Aqua, Glycolic Acid, Lactic Acid, Citric Acid,
                        PropyleneGlycol, Salicylic Acid, Sodium Hydroxide,
                        Tartaric Acid, Malic Acid, XanthanGum, Panthenol, Sodium
                        Hyaluronate, Pyrus Malus Fruit Extract, Vitis
                        ViniferaLeaf Extract, Citrus Medica Fruit Juice Extract,
                        Vaccinium Myrtillus FruitExtract, Saccharum Officinarum
                        Extract, Glycine, Alanine, Serine, Valine, Isoleucine,
                        Proline, Threonine, Histidine, Phenylalanine, Arginine,
                        Aspartic Acid, PCA, PotassiumSorbate, Sodium Benzoate,
                        Hydroxyethylcellulose, Sodium Lactate, Sodium PCA,
                        Tetrasodium EDTA.
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Şekli ve Uyarıları")} :
                        </li>
                        {t("Göz çevresi hariç, temiz ve havlu kuruluğundaki cildinize yetecek miktarda sadece akşam uygulayın. En fazla 10 dakika bekletip bol su ile yıkayın. Hafta 1-2 kez uygulanabilir. Haftada maksimum 2 kez uygulayabilirsiniz. Ürünü kullanmadan önce istenmeyen olası yan etkileri ve tahrişi önlemek için yama testi yapmanız önerilir. Tahriş durumunda kullanmayı bırakınız ve dermatoloğa danışınız. Gözle direkt temasından kaçınınız. Temas halinde bol su ile durulayınız. Çocukların ulaşamayacağı bir yerde muhafaza ediniz.")}
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

export default PeelingMaskeCiltBakimSerumu;
