/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../../../common/Spacer2";
import { useTranslation } from "react-i18next";
import ProductCarousel from "../../carousel/ProductCarousel";
import ProductCarouselTitleSlogan from "../../carousel/ProductCarouselTitleSlogan";
import ProductCarouselDescCam from "../../carousel/ProductCarouselDescCam";
import ProductCarouselOne from "../../carousel/ProductCarouselOne";
import ProductCarouselDescOne from "../../carousel/ProductCarouselDescOne";
import { Helmet } from "react-helmet";

const IOTSilinebilirGiyotinSistem = () => {
  const { t } = useTranslation();

  const pageDescription = "IOT Silinebilir Giyotin Cam Sistemi, 3 panelli uzaktan kumanda ile dikey olarak aşağı, yukarı açılabilen en önemlisi de vasistas özelliği sayesinde kolaylıkla temizlenebilir sistemimizdir.";
  const pageKeywords = "IOT Silinebilir Giyotin Cam Sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/IOT-silinebilir-giyotin-sistem";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("IOT Silinebilir Giyotin Cam Sistemleri")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <Spacer2 />
        <div className="product-single mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarousel
                  title1={t("IOT Silinebilir Giyotin Cam Sistemleri")}
                  picture1="assets/images/cam-balkon/giyotin/63.webp"
                  title2={t("IOT Silinebilir Giyotin Cam Sistemleri")}
                  picture2="assets/images/cam-balkon/giyotin/64.webp"
                  title3={t("IOT Silinebilir Giyotin Cam Sistemleri")}
                  picture3="assets/images/cam-balkon/giyotin/65.webp"
                  title4={t("IOT Silinebilir Giyotin Cam Sistemleri")}
                  picture4="assets/images/cam-balkon/giyotin/66.webp"
                  title5={t("IOT Silinebilir Giyotin Cam Sistemleri")}
                  picture5="assets/images/cam-balkon/giyotin/67.webp"
                  title6={t("IOT Silinebilir Giyotin Cam Sistemleri")}
                  picture6="assets/images/cam-balkon/giyotin/68.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("IOT Silinebilir Giyotin Cam Sistemleri")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Cam Balkon Sistemi")}
                    desc1={t(
                      "IOT Silinebilir Giyotin Cam Sistemi, 3 panelli uzaktan kumanda ile dikey olarak aşağı, yukarı açılabilen en önemlisi de vasistas özelliği sayesinde kolaylıkla temizlenebilir sistemimizdir. Akıllı cam balkon sistemleri cafeler de, restoranlar da, teraslar da ve özel müstakil evlerde tercih edilir. İhtiyacınıza uygun 6,8,10mm cam ve 20(4+12+4)mm ısıcam seçeneklerimiz mevcuttur. Panel set aksesuarları sayesinde kurulumu kolaydır.. Cafeler de, restoranlarda ve özel müstakil evlerde tercih edilir. Çift cam (4+12+4) ve tek cam ihtiyacınıza uygun iki ayrı seçeneğimiz mevcuttur. Panel set aksesuarları sayesinde kurulumu kolaydır."
                    )}
                    title2={t("Cam Balkon Aksesuarları")}
                    desc2={t(
                      "IOT Silinebilir Giyotin Sistemlerde kullanılan tüm ürünler hammadde kalitesinin özelliğinden güneş, yağmur, soğuk, kar gibi dış hava koşullarından etkilenmeden uzun yıllar kullanabilirsiniz."
                    )}
                    desc3={t(
                      "Uzaktan Kumandalı Sistem sayesinde kablo hattı çekilmeden, sadece uzaktan kumanda ile açılıp kapatılır."
                    )}
                    desc4={t(
                      "Özel Kayışlı Kasnak Sistemi sayesinde kayışın kasnaktan çıkması engellenir. Güçlü motor sayesinde cam paneller sağlam ve sarsıntısız hareket ederler."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Aç Kapa Uzaktan Kumanda")}
                  picture1="assets/images/cam-balkon/giyotin/64.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Aç Kapa Uzaktan Kumanda")}
                  slogan={t("Kullanım Kolaylığı")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Aç Kapa Uzaktan Kumanda")}
                    desc1={t(
                      "Uzaktan Kumandalı Sistem sayesinde kablo hattı çekilmeden, sadece uzaktan kumanda ile açılıp kapatılır."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Cam Kalınlığı Seçeneği")}
                  picture1="assets/images/cam-balkon/giyotin/77.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Cam Kalınlığı Seçeneği")}
                  slogan={t("Uygun Cam Kalınlığı Seçenekleri Sunuyoruz")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Cam Kalınlığı Seçeneği")}
                    desc1={t(
                      "IOT Silinebilir Giyotin Sistemde 6,8,10 ve 20(4+12+4) mm kalınlığındaki cama göre 2 çeşit sistemimiz mevcuttur. Bu cam kalınlığı, dayanıklılık ve estetik açıdan mükemmel bir denge sağlamak üzere tasarlanmıştır. Farklı renklerde cam seçeneği imkanı."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Ultra Yalıtım Sağlar")}
                  picture1="assets/images/cam-balkon/giyotin/66.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Ultra Yalıtım Sağlar")}
                  slogan={t("Kenetlenebilir Tasarımlı Mıknatıslı Fitil")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Ultra Yalıtım Sağlar")}
                    desc1={t(
                      "IOT Silinebilir Giyotin Sisteminin yan kasarlarında bulunan kıl fitil kanalları sayesinde, ürün yelpazemizdeki çeşitli kıl fitilleri kullanarak, ultra yalıtım sağlarsınız. Bunun yanı sıra resimde gösterilen birbirini tam kapatan kenet tasarımı sayesinde su, hava, toz, ses gibi dış etkenlerden koruma sağlar."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Kolay Silinebilir")}
                  picture1="assets/images/cam-balkon/giyotin/65.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Kolay Silinebilir")}
                  slogan={t("Açılır Kanatlar")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Kolay Silinebilir")}
                    desc1={t(
                      "IOT Silinebilir Giyotin Sisteminde camların rahatlıkla silinebilmesi için özel olarak tasarlanmış paslanmaz kanatlar sayesinde açılır kanatlar."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("El Sıkışmasını Önler")}
                  picture1="assets/images/cam-balkon/giyotin/76.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("El Sıkışmasını Önler")}
                  slogan={t("Sessizlik Konforu Sunar")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("El Sıkışmasını Önler")}
                    desc1={t(
                      "Silinebilir Giyotin Sisteminde kapak mekanizması Sayesinde, el sıkışmalarını önler, yukarı aşağı hareket ettirilerek kullanımı kolay ve rahattır."
                    )}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default IOTSilinebilirGiyotinSistem;
