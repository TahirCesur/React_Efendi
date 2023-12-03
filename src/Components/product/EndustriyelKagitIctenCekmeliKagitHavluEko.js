/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelKagitIctenCekmeliKagitHavluEko() {
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
            <h2 className="page-header__title">{t("İÇTEN ÇEKMELİ KAĞIT HAVLU EKO")}</h2>
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
                    alt={t("İçten Çekmeli Kağıt Havlu")}
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
                      {t("İÇTEN ÇEKMELİ KAĞIT HAVLU")}
                      <span className="product-details__price">{t("EKO")}</span>
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
                        {t("İçten çekmeli kağıt havlu, bir rulo şeklinde bulunan kağıt havlu sistemidir. Bu sistemde, kağıt havlu rulosu, dispensere monte edilmiş ve kullanıcı, kağıt havluyu dispenserden içeri çekerek kullanır. Kağıt havlu, genellikle el ve yüz temizliği için kullanılan, ince ve hafif bir kağıt malzemeden yapılan temizlik ürünüdür.Kağıt havlu rulosu, özel bir dispenser içerisine monte edilmiştir. Dispenser, kullanıcının kağıt havluyu çekmesine ve kullanmasına olanak tanır. Kullanıcı, dispenserden çıkardığı kağıt havluyu tek bir çekimle alır. Bu tasarım, kağıt havlunun kontrollü bir şekilde kullanılmasını sağlar.")}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları")} :
                        </li>
                        {t("İçten çekmeli kağıt havlu sistemleri, hem ev kullanımı hem de endüstriyel alanlarda yaygın olarak tercih edilir. Özellikle mutfak, banyo ve halka açık tuvaletlerde kullanımı yaygındır.Dispenserden içeri çekme sistemi, kullanıcıya kolaylık sağlar ve kağıt havlunun düzenli bir şekilde çekilmesini sağlar.Kağıt havlular genellikle mutfaklarda, banyolarda, ofislerde ve halka açık alanlarda kullanılır. El ve yüz temizliği, sıvı dökülmelerinin temizlenmesi gibi çeşitli amaçlar için kullanılır.")}
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

export default EndustriyelKagitIctenCekmeliKagitHavluEko;
