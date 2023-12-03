/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function HassasAtopikCiltYuzYikamaJeli() {
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
              {t("HASSAS VE ATOPİK CİLTLER İÇİN YÜZ YIKAMA JELİ")}
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
                    src="assets/images/lopren/hassas-cilt-yuz-yikama-jeli.webp"
                    alt="HASSAS VE ATOPİK CİLTLER İÇİN YÜZ YIKAMA JELİ"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/lopren/hassas-cilt-yuz-yikama-jeli.webp"
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
                    {t("HASSAS VE ATOPİK CİLTLER İÇİN YÜZ YIKAMA JELİ")}
                      <span className="product-details__price">400 ML</span>
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
                        {t("Jel, nazik formülüyle hassas ciltleriçin özel olarak üretilmiştir. İçerisinde bulunan bitkisel özler ve proteinler sayesinde cildi yağ, kir ve makyaj kalıntılarından temizleyerek arındırır. Cilde nem ve canlılık kazandırır. Hassas ciltlere özel formüle edildiği için tüm cilt tiplerinin kullanımına uygun bir üründür.")}
                        <li>
                        <span className="icon-right-arrow"></span>
                          {t("İçindekiler")}:
                        </li>
                        Aqua, Glycerin, Cocamidopropyl Betaine, Lauryl
                        Glucoside, Panthenol, Sodium Lauryl Glucose Carboxylate,
                        Cocamide MIPA, Coco-Glucoside, Sodium Benzoate,
                        Potassium Sorbate, Chamomilla Recutita Flower Extract,
                        Aloe Barbadensis Leaf Extract, Hydrolyzed Wheat Protein,
                        Hydrolyzed Soy Protein, Hydrolyzed Corn Protein, Sodium
                        PCA, C12-25 Alkyl Benzoate, Tetrasodium EDTA.
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Şekli ve Uyarıları")} :
                        </li>
                        {t(
                          "Sabah ve akşam temizliğini tamamladığınız cildinize yukarı doğru hareketlerle masaj yaparak uygulayın. Tahriş olmuş ciltte kullanmayınız. Ürünü kullanmadan önce istenmeyen olası yan etkileri ve tahrişi önlemek için yama testi yapmanız önerilir. Tahriş durumunda kullanmayı bırakınız ve dermatoloğa danışınız. Gözle direkt temasından kaçınınız. Temas halinde bol su ile durulayınız. Çocukların ulaşamayacağı bir yerde muhafaza ediniz."
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

export default HassasAtopikCiltYuzYikamaJeli;
