/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelMutfakOztiryakilerBardakYikamaMakinesi() {
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
              {t("ÖZTİRYAKİLER BARDAK YIKAMA 40X40")}
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
                    src="assets/images/endustriyelmutfak/inoksan-bulasik-makinesi-500-tabak.webp"
                    alt="ÖZTİRYAKİLER BARDAK YIKAMA 40X40"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelmutfak/inoksan-bulasik-makinesi-500-tabak.webp"
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
                      {t("ÖZTİRYAKİLER BARDAK YIKAMA 40X40")}
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
                        {t("Paslanmaz çelikten gövde, boyler ve yıkama tankı")}
                        <br />
                        {t("Hijyenik yıkama tankı")}
                        <br />
                        {t(
                          "Saatte 30 sepet yıkama kapasitesi (Sepet ölçüleri 40cmx40cm)"
                        )}
                        <br />
                        {t("Her yıkama periyodu için 2.5 litre su tüketimi")}
                        <br />
                        {t("Otomatik ve kullanıcı dostu kontrol paneli")}
                        <br />
                        {t("Yıkama programı periyodu 120 sn.")}
                        <br />
                        {t(
                          "Enerji, deterjan ve su kullanımında tasarruf sağlar"
                        )}
                        <br />
                        {t(
                          "Yıkama kolları güçlendirilmiş polypropylen(PP)'dir"
                        )}
                        <br />
                        {t("Ayarlanabilir ayaklar ile yükseklik optimizasyonu")}
                        <br />
                        {t(
                          "Enerji, deterjan ve su kullanımında tasarruf sağlar"
                        )}
                        <br />
                        {t(
                          "Kolay başlatma; boyler ve yıkama tanklarını tek tuşla su doldurma ve ısıtma imkanı"
                        )}
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
                        {t(
                          "Yıkama suyu sıcaklığı 55-60°C (besleme suyu en az 2 bar ve 50°C sıcaklıkta olmak koşulu ile)"
                        )}
                        <br />
                        {t(
                          "Durulama suyu sıcaklığı 8085°C (besleme suyu en az 2 bar ve 50°C sıcaklıkta olmak koşulu ile)"
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Teknik Özellikler")} :
                        </li>
                        {t("Tip: Elektrikli")}
                        <br />
                        {t("En (mm): 475")}
                        <br />
                        {t("Boy (mm): 545")}
                        <br />
                        {t("Yükseklik (mm): 765")}
                        <br />
                        {t("Net Ağırlık (Kg): 35(+/-5)")}
                        <br />
                        {t("Brüt Ağırlık (Kg): 40(+/-5)")}
                        <br />
                        {t("Hacim (m3): 0,20")}
                        <br />
                        {t("Kapasite: 500 Bardak/Saat")}
                        <br />
                        {t("Elektrik Gücü: 3,3")}
                        <br />
                        {t("Volt: 230V - NPE")}
                        <br />
                        {t("Frekans: 50")}
                        <br />
                        {t("Sıcak Su Basıncı: 2-4 bar")}
                        <br />
                        {t("Sıcak Su Sertliği: 0-10 Fransız Su Sertliği")}
                        <br />
                        {t("Soğuk Su Giriş Çapı: 3/4 ''")}
                        <br />
                        {t("Soğuk Su Basıncı: 2-4 bar")}
                        <br />
                        {t("Soğuk Su Sertliği: 0-10 Fransız Su Sertliği")}
                        <br />
                        {t("Dranaj Giriş Çapı: Ø 28")}
                        <br />
                        {t("Tank Hacmi: 18,4")}
                        <br />
                        {t("Boiler Hacmi: 2,8")}
                        <br />
                        {t("Boiler Isıtıcı Gücü: 3")}
                        <br />
                        {t("Tank Isıtıcı Gücü: 2")}
                        <br />
                        {t("Yıkama Pompası Gücü: 0,27")}
                        <br />
                        {t("Durulama Pompa Gücü: -")}
                        <br />
                        {t("Yıkama Suyu Sıcaklığı: 55 - 60")}
                        <br />
                        {t("Durulama Suyu Sıcaklığı: 80 - 85")}
                        <br />
                        {t("Kurutma Fan Gücü: -")}
                        <br />
                        {t("Maksimum Gürültü: 70")}
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

export default EndustriyelMutfakOztiryakilerBardakYikamaMakinesi;
