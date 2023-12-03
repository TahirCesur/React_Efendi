/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function RetinolCiltyenileyiciBakimSerumu() {
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
            {t("RETİNOL 0.5% CİLT YENİLEYİCİ BAKIM SERUMU")}
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
                    src="assets/images/lopren/cilt-yenileyici-bakim-serumu.webp"
                    alt="RETİNOL 0.5% CİLT YENİLEYİCİ BAKIM SERUMU"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/lopren/cilt-yenileyici-bakim-serumu.webp"
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
                    {t("RETİNOL 0.5% CİLT YENİLEYİCİ BAKIM SERUMU")}
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
                        {t("Retinol içeriği ile yoğun bakım uygulayarak cilt yenilenmesine destek olur. Daha aydınlık, canlı ve ışıltılı bir görünüm kazanmanıza yardımcı olur. Retinolün kurutucu özelliğini baskılamak için yağ bazlı formülize edilmiştir.")}
                        <li>
                        <span className="icon-right-arrow"></span>
                          {t("İçindekiler")}:
                        </li>
                        C12-15 Alkyl Benzoate, Squalane, Simmondsia Chinensis
                        (Jojoba) Seed Oil, Prunus Armeniaca Kernel Oil, Prunus
                        Amygdalus Dulcis Oil, Persea Gratissima Oil, Punica
                        Granatum Seed Oil, Rosa Canina Seed Oil, Helianthus
                        Annuus Seed Oil, Retinol, Retinyl Palmitate, Ceramide
                        Np, Tocopheryl Acetate, Glycine Soja Oil, Lecithin,
                        Caprylic/Capric Triglyceride, Dimethiconol,
                        Cyclopentasiloxane, Phenoxyethanol, Bht.
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Şekli ve Uyarıları")} :
                        </li>
                        {t("Temizlediğiniz cildinize birkaç damla serumu akşam bakım kreminden önce uygulayınız. Bu ürünü kullandığınız dönemde cildinizi güneşten koruyunuz. Retinol ağır bir içeriktir. Göz ve dudak çevresinde kızarıklık ve tahrişe neden olabilir. Ürünü kullanmaya devam ettikçe cildinizin hassasiyeti azalabilir. Tahrişin devam etmesi adından ürün kullanımını bırakıp dermatoloğa danışınız. Göz ile temasından kaçınınız, herhangi bir temas durumunda yüzünüzü bol su ile yıkayınız. Çocukların ulaşamayacağı güvenilir bir yerde muhafaza ediniz.")}
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

export default RetinolCiltyenileyiciBakimSerumu;
