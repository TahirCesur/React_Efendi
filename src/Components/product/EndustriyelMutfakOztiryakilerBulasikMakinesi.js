/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelMutfakOztiryakilerBulasikMakinesi() {
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
              {t("ÖZTİRYAKİLER BULAŞIK MAKİNESİ 1000 TABAK")}
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
                    src="assets/images/endustriyelmutfak/oztiryakiler-1000-tabak.webp"
                    alt="ÖZTİRYAKİLER BULAŞIK MAKİNESİ 1000 TABAK"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelmutfak/oztiryakiler-1000-tabak.webp"
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
                      {t("ÖZTİRYAKİLER BULAŞIK MAKİNESİ 1000 TABAK")}
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
                          {t("Genel Özellikler")} :
                        </li>
                        {t("Kullanımı kolay otomatik Dijital Kontrol Paneli")}
                        <br />
                        {t("Paslanmaz çelikten gövde, boyler ve yıkama tankı")}
                        <br />
                        {t("Yekpare baskılı hijyenik yıkama tankı")}
                        <br />
                        {t(
                          "Saatte 69 sepet yıkama kapasitesi (Sepet ölçüleri 50cmx50cm)"
                        )}
                        <br />
                        {t("Her yıkama periyodu için 2.8 litre su tüketimi")}
                        <br />
                        {t("5 farklı yıkama programı (52/102/132/152/192 sn.)")}
                        <br />
                        {t("Köşe kullanımına uygun yapıda")}
                        <br />
                        {t(
                          "Yıkama kolları, paslanmaz çelik ve güçlendirilmiş polypropylen (PP)'den mevcuttur"
                        )}
                        <br />
                        {t("Ayarlanabilir ayaklar ile yükseklik optimizasyonu")}
                        <br />
                        {t(
                          "Elektriksel komponentler ve kablolama sistemleri uluslararası standartlara ve güvenlik"
                        )}
                        <br />
                        {t(
                          "Tüm gövde izole edilmiş ve suya karşı IPX5 koruma standardındadır"
                        )}
                        <br />
                        {t(
                          "Etkili yıkama için durulama ve yıkama sıcaklıkları termostat kontrollü"
                        )}
                        <br />
                        {t(
                          "Makinedeki suyun tesisata geri dönüşünü engelleyen valf sistemi"
                        )}
                        <br />
                        {t("Sıcaklıkları ve uyarıları gösteren dijital ekran")}
                        <br />
                        {t(
                          "Kolay başlatma; boyler ve yıkama tanklarını tek tuşla su doldurma ve ısıtma imkanı"
                        )}

                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Teknik Özellikler")} :
                        </li>
                        {t("Tip: Elektrikli")}
                        <br />
                        {t("En (mm): 700")}
                        <br />
                        {t("Boy (mm): 785")}
                        <br />
                        {t("Yükseklik (mm): 1480(1960)")}
                        <br />
                        {t("Net Ağırlık (Kg): 100(+/-5)")}
                        <br />
                        {t("Brüt Ağırlık (Kg): 110(+/-5)")}
                        <br />
                        {t("Hacim (m3): 0,78")}
                        <br />
                        {t("Kapasite: 1108Plate/hour")}
                        <br />
                        {t("Elektrik Gücü: 9,66")}
                        <br />
                        {t("Volt: 400V - 3NPE")}
                        <br />
                        {t("Frekans: 50")}
                        <br />
                        {t("Sıcak Su Basıncı: 2-4 bar")}
                        <br />
                        {t("Sıcak Su Sertliği: 0-10 Fransız Su Sertliği")}
                        <br />
                        {t("Soğuk Su Giriş Çapı: 3/4''")}
                        <br />
                        {t("Soğuk Su Basıncı: 2-4 bar")}
                        <br />
                        {t("Soğuk Su Sertliği: 0-10 Fransız Su Sertliği")}
                        <br />
                        {t("Dranaj Giriş Çapı: 3/4''")}
                        <br />
                        {t("Tank Hacmi: 19")}
                        <br />
                        {t("Boiler Hacmi: 7")}
                        <br />
                        {t("Boiler Isıtıcı Gücü: 9")}
                        <br />
                        {t("Tank Isıtıcı Gücü: 3")}
                        <br />
                        {t("Yıkama Pompası Gücü: 0,66")}
                        <br />
                        {t("Durulama Pompa Gücü: 0,37")}
                        <br />
                        {t("Yıkama Suyu Sıcaklığı: 55 - 60")}
                        <br />
                        {t("Durulama Suyu Sıcaklığı: 80 - 85")}
                        <br />
                        {t("Kurutma Fan Gücü: -")}
                        <br />
                        {t("Maksimum Gürültü: 75")}
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

export default EndustriyelMutfakOztiryakilerBulasikMakinesi;
