/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
  
function EndustriyelKagitMiniJumboTuvaletKagidiEko() {
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
              {t("MİNİ JUMBO TUVALET KAĞIDI EKO")}
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
                    src="assets/images/endustriyelkagit/tuvalet-kagidi.webp"
                    alt={t("Mini Jumbo Tuvalet Kağıdı")}
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelkagit/tuvalet-kagidi.webp"
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
                      {t("MİNİ JUMBO TUVALET KAĞIDI")}
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
                        {t(
                          "Mini jumbo tuvalet kağıdı, standart jumbo tuvalet kağıtlarından daha küçük boyutta olan bir tuvalet kağıdı türüdür. Bu tip tuvalet kağıtları genellikle yoğun kullanım alanlarındaki tuvaletlerde, restoranlarda, ofislerde ve halka açık tuvaletlerde tercih edilir. Mini jumbo tuvalet kağıtları, standart jumbo tuvalet kağıtlarına göre daha küçük boyutlarda tasarlanmıştır. Bu, kullanım alanlarına daha iyi uymalarını sağlar. Genellikle rulo şeklinde gelirler ve bir dispenser içine monte edilirler. Bu dispenserler, kağıdın düzenli bir şekilde kullanılmasını sağlar."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kullanım Alanları")} :
                        </li>
                        {t(
                          "Mini jumbo tuvalet kağıtları, yoğun trafiğe sahip ve sıkça kullanılan tuvaletlerde tercih edilir. Özellikle ticari işletmeler, restoranlar ve alışveriş merkezleri gibi yerlerde yaygındır. Genellikle dayanıklı bir yapısı vardır, bu da yoğun kullanım koşullarında uzun ömürlü olmalarını sağlar."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Güvenlik ve Hijyen")} :
                        </li>
                        {t(
                          "Tuvalet kağıtlarının hijyenik kullanımı için dispenser sistemleri kullanılır. Bu sistemler, kullanıcıların doğrudan kağıda temasını önler ve hijyen standartlarını artırır. Mini jumbo tuvalet kağıtları, dokulama ve yumuşaklık özellikleriyle konforlu bir tuvalet deneyimi sunar. Bu tip tuvalet kağıtları, pratik ve ekonomik bir çözüm sunarak hijyen standartlarını korumaya yönelik tercih edilen bir üründür."
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

export default EndustriyelKagitMiniJumboTuvaletKagidiEko;
