/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function GidaCaykurRizeTuristCay() {
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
              {t("ÇAYKUR RİZE TURİST ÇAYI")}
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
                    src="assets/images/gida/caykur-rize-turist-cay.webp"
                    alt="Çaykur Rize Turist Çay"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/gida/caykur-rize-turist-cay.webp"
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
                      {t("ÇAYKUR RİZE TURİST ÇAYI")}
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
                          {t("Bilgilendirme")}:
                        </li>
                        {t(
                          "Çaykur Kamelya Çay, Türkiye'nin önde gelen çay üreticilerinden biri olan Çaykur tarafından üretilen bir çay markasıdır. Türk çay kültüründe önemli bir yer tutan siyah çay, geleneksel demleme yöntemleriyle hazırlanır. Çaykur Kamelya Çayı daha çok kahvaltılarda ve çay saatlerinde tercih edilmektedir. Yumuşak içimli, hafif ve yoğun aroması olmayan bir çaydır. Karadeniz'in tarlalarından toplanmış olup harmanlanmaya uygun bir çayçeşididir. Kamelya çayı; siyah bir çay olup hafif bir tada sahiptir."
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Marka İmajı")}:
                        </li>
                        {t(
                          "Çaykur çay çeşitleri arasında en çok tercih edilenlerinden biri olan Çaykur Rize Turist Çay’ı, siyah ve aromasız bir çaydır. Çay saatlerinin vazgeçilmezi olan Çaykur Rize Turist Çay’ı ıle keyifli anlarınızı lezzetlendirebilirsiniz. Hızla dememlenen iri çay yaprakları sayesinde her yudumunuzda çayın gerçek lezzetine varacaksınız. Çaykur siyah çaylar arasında “gerçek sarı” olarak da bilinen Çaykur Rize Turist Çay’ı güvendiğiniz kalitesi ile yıllardır size en ıyi çay deneyimini yaşatmaya devam etmektedir.  Çaykur Rize Turist Çay’ına; 100gr, 200gr, 500gr, 1000gr, 2000gr olarak ıstediğiniz ambalajlarda sahip olabilirsiniz. En lezzetli tadı alabilmek ıçin porselen veya cam demlik tercih edebilirsiniz. Demlik içerisindeki su iyice kaynadıktan sonra üzerine her bir bardak için iki çay kaşığı Çaykur Rize Turist Çay eklenmelidir. Demlenen çayı, çaydanlığın üzerine koyarak kısık ateşte 10-12 dakika boyunca demledikten sonra afiyet ile içebilirsiniz."
                        )}
                      </ul>
                    </p>
                  </div>

                  <div className="product-details__socials">
                    <h4 className="product-details__socials__title">
                      ARKADAŞLARINLA PAYLAŞ
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

export default GidaCaykurRizeTuristCay;
