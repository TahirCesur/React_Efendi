/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function GidaKupSeker() {
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
            <h2 className="page-header__title">{t("KÜP ŞEKER")}</h2>
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
                  <img src="assets/images/gida/kup-seker.webp" alt="Küp Şeker" />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/gida/kup-seker.webp"
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
                      {t("KÜP ŞEKER")}
                      <span className="product-details__price">
                        {t("TEKLİ")}
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
                          {t("Bilgilendirme")}:
                        </li>
                        {t(
                          "Tek paketli küp şeker, genellikle kullanımı pratik hale getirmek ve dozajı kontrol etmek amacıyla bireysel paketlerde sunulan küp şekerlerdir. Bu tip şekerler, özellikle kahve, çay ve diğer içeceklerde şekerin miktarını belirli bir ölçüde tutmak isteyen kişiler için uygun bir seçenektir."
                        )}

                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Ambalaj ve Boyut")} :
                        </li>
                        {t(
                          "Tek paketli küp şekerler genellikle tek kullanımlık paketlerde gelir. Bu paketler genellikle ince plastik veya kağıt malzemeden yapılmış olup, içeride tek bir küp şeker bulunur. Her paket, genellikle belirli bir miktar şeker içerir ve şeker küpünün boyutu standart bir ölçüde olabilir. Bu, içeceğe eklenecek şeker miktarını kolayca kontrol etmeyi sağlar. Tek paketli küp şekerler, taşınabilir olmaları sayesinde dışarıda veya seyahat sırasında kullanım için uygundur. İçeceklerinize eklemek istediğinizde kolayca taşınabilirler."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Hijyen ve Kolay Kullanım")}:
                        </li>
                        {t(
                          "Bireysel paketler, hijyen sağlar ve her paket tek kullanımlık olduğu için kullanımı kolaylaştırır. Tek paketli küp şekerler genellikle beyaz şekerin yanı sıra kahverengi şeker veya şeker kamışı şekeri gibi çeşitli şeker türlerinde bulunabilir. Bu tip küp şekerler, özellikle hijyen ve dozaj kontrolü gibi avantajlar sağlamak isteyen kullanıcılar için pratik bir çözüm sunar."
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

export default GidaKupSeker;
