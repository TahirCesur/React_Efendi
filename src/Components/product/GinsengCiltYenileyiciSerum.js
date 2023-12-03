/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function GinsengCiltYenileyiciSerum() {
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
              {t("LOPREN GİNSENG CİLT YENİLEYİCİ SERUM")}
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
                    src="assets/images/lopren/gınseng-cilt-yenileyici-serum.webp"
                    alt="LOPREN GİNSENG CİLT YENİLEYİCİ SERUM"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/lopren/gınseng-cilt-yenileyici-serum.webp"
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
                      {t("LOPREN GİNSENG CİLT YENİLEYİCİ SERUM")}
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
                        {t(
                          "Yüksek oranda ginseng özü içeren canlandırıcı serum içerdiği B5 Vitamini ile cildinizi besler. Tüm cilt tiplerine uygun olan serum sayesinde daha canlı ve bakımlı bir cilde sahip olmanıza yardımcı olur."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("İçindekiler")}:
                        </li>
                        {t(
                          "Aqua, Glycerin, Panax Ginseng Root Extract, Niacinamide, Panthenol, Hydrolyzed Glycosaminoglycans, Sodium Hyaluronate, Hydrolyzed hyaluronic acid, Hyaluronic acid, Sodium Hyaluronate Crosspolymer, Allantoin, Equisetum Arvense Leaf Extract, Daucus Carota Sativa Root Extract, Aesculus Hippocastanum Seed Extract, Echinacea Angustifolia Root Extract, Hypericum Perforatum Extract, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Arginine, Aspartic Acid, Sodium Lactate, PCA, Sodium PCA, Propanediol, Sodium Benzoate, Potassium Sorbate, Hydroxyethylcellulose, Tetrasodium EDTA."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Şekli ve Uyarıları")} :
                        </li>
                        {t(
                          "Temiz cildinize sabah ve akşam masaj yaparak uygulayın. Haricen kullanılır. Tahriş olmuş ciltte kullanmayınız. Gün içinde güneş koruyucu kullanınız. Ürünü kullanmadan önce istenmeyen olası yan etkileri ve tahrişi önlemek için yama testi yapmanız önerilir. Tahriş durumunda kullanmayı bırakınız ve dermatoloğa danışınız. Gözle direkt temasından kaçınınız. Temas halinde bol su ile durulayınız. Çocukların ulaşamayacağı bir yerde muhafazaediniz."
                        )}
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

export default GinsengCiltYenileyiciSerum;
