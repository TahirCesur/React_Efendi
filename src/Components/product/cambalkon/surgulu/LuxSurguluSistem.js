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

const LuxSurguluSistem = () => {
  const pageDescription = "üx Sürgülü Sistem Dünyada Muadili Olmayan, Patentli Ürünlerimiz Bünyesine En Son Eklenen Yeni Sistemimizdir. Lüx Sürgülü Sistem düz, 90 ve 135 derece açılı yapılarda kullanılır.";
  const pageKeywords = "Lüks Sürgülü Cam Sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/lux-surgulu-sistem";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Lüx Sürgülü Cam Sistemleri")}</title>
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
                  title1={t("Lüx Sürgülü Cam Sistemleri")}
                  picture1="assets/images/cam-balkon/surgulu-cam/54.webp"
                  title2={t("Lüx Sürgülü Cam Sistemleri")}
                  picture2="assets/images/cam-balkon/surgulu-cam/57.webp"
                  title3={t("Lüx Sürgülü Cam Sistemleri")}
                  picture3="assets/images/cam-balkon/surgulu-cam/58.webp"
                  title4={t("Lüx Sürgülü Cam Sistemleri")}
                  picture4="assets/images/cam-balkon/surgulu-cam/61.webp"
                  title5={t("Lüx Sürgülü Cam Sistemleri")}
                  picture5="assets/images/cam-balkon/surgulu-cam/59.webp"
                  title6={t("Lüx Sürgülü Cam Sistemleri")}
                  picture6="assets/images/cam-balkon/surgulu-cam/62.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Lüx Sürgülü Cam Sistemleri")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Cam Balkon Sistemi")}
                    desc1={t(
                      "Lüx Sürgülü Sistem Dünyada Muadili Olmayan, Patentli Ürünlerimiz Bünyesine En Son Eklenen Yeni Sistemimizdir. Lüx Sürgülü Sistem düz, 90 ve 135 derece açılı yapılarda kullanılır. Genellikle cafelerde, restoranlarda ve özel müstakil evlerde tercih edilir. Ayrıca isteğe bağlı kendi üretimimiz, kendi tasarımız, patenti bize ait, cep telefonunuz ile kontrol edilebilen motor sayesinde otomatik açılıp kapanabilir."
                    )}
                    title2={t("Cam Balkon Aksesuarları")}
                    desc2={t(
                      "Lüx Sürgülü Sistemlerde kullanılan tüm ürünler hammadde kalitesinin özelliğinden güneş, yağmur, soğuk, kar gibi dış hava koşullarından etkilenmeden uzun yıllar kullanabilirsiniz."
                    )}
                    desc3={t(
                      "Lüx Sürgülü Sistemde Kullanılan geniş yapısı ve kenetlenebilir özellikli mıknatıslı fitil sayesinde su, toz ve hava geçirgenliğini en minumum seviyelere indirerek size üstün yalıtım özellikleri sunar."
                    )}
                    desc4={t(
                      "Lüx Sürgülü Sistemde kullanılan kasa profili (Ray Profili), 3'lü ve 5'li ray seçeneklerimiz mevcuttur. Yapılan yük taşıma testleri sonucunda her bir paneldeki çift teker sayesinde ray üzerinde dengeli gidecek şekilde dizayn edilmiş ve üretilmiştir."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Renk Seçeneği")}
                  picture1="assets/images/cam-balkon/surgulu-cam/56.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Renk Seçeneği")}
                  slogan={t("Uygun Renk Seçenekleri Sunuyoruz")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Renk Seçeneği")}
                    desc1={t(
                      "Klasik ve popüler bir seçenek olan beyaz renk, çoğu mekânda uyum sağlayabilir. Sıcak ve doğal bir görünüm sunan bronz veya kahverengi tonları, dış mekânlarda tercih edilebilir. Modern ve şık bir görünüm elde etmek isteyenler için antrasit gri veya siyah renk seçenekleri mevcuttur. Ahşap görünümü sevenler için ahşap desenli kaplamalar da bulunabilir. Bu, doğal ahşap görünümü sağlarken, dayanıklı alüminyum veya PVC malzemeleri kullanılır."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Cam Kalınlığı Seçeneği")}
                  picture1="assets/images/cam-balkon/surgulu-cam/55.webp"
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
                      "Cam Balkonlarımızda 6-8-10-20(4+12+4) mm kalınlığında cam kullanılmaktadır. Bu cam kalınlığı, dayanıklılık ve estetik açıdan mükemmel bir denge sağlamak üzere tasarlanmıştır. Farklı renklerde cam seçeneği imkanı."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Çoklu Kıl Fitilin Önemi")}
                  picture1="assets/images/cam-balkon/surgulu-cam/58.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Çoklu Kıl Fitilin Önemi")}
                  slogan={t("Kenetlenebilir Tasarımlı Mıknatıslı Fitil")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Çoklu Kıl Fitilin Önemi")}
                    desc1={t(
                      "Lüx Sürgülü Sistemde kullanılan kasa profili 5'li sistemde 14 fitil kanalı 3'lü sistemde 8 kıl fitil kanalı ek olarak her baza da 2'şer adet kıl fitil bulunmaktadır. Bu sistem sayesinde üstün yalıtım imkanından isteğe bağlı faydalanabilirsiniz."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("İsteğe Bağlı (Opsiyonel) Sineklik")}
                  picture1="assets/images/cam-balkon/surgulu-cam/57.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("İsteğe Bağlı (Opsiyonel) Sineklik")}
                  slogan={t("Böceksiz ve Sineksiz Bir Ortam")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("İsteğe Bağlı (Opsiyonel) Sineklik")}
                    desc1={t(
                      "Lüx Sürgülü Sistemde kullanılan sineklik profili sayesinde, böcek ve sineklerden korunarak temiz havadan faydalanabilirsiniz."
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

export default LuxSurguluSistem;
