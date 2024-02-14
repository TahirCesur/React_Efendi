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

const EsikliSurguluSistem = () => {
  const pageDescription =
    "Eşikli Sürgülü Sistem, balustradların üzerinde belli bir yüksekliği olan veya yoğun ve geçişi olmayan projelerde kullanılabilen bir sistemdir ve kullanımı oldukça kolaydır.";
  const pageKeywords = "Eşikli Sürgülü Cam Sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/esikli-surgulu-sistem";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Eşikli Sürgülü Cam Sistemleri")}</title>
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
                  title1={t("Eşikli Sürgülü Cam Sistemleri")}
                  picture1="assets/images/cam-balkon/surgulu-cam/45.webp"
                  title2={t("Eşikli Sürgülü Cam Sistemleri")}
                  picture2="assets/images/cam-balkon/surgulu-cam/46.webp"
                  title3={t("Eşikli Sürgülü Cam Sistemleri")}
                  picture3="assets/images/cam-balkon/surgulu-cam/47.webp"
                  title4={t("Eşikli Sürgülü Cam Sistemleri")}
                  picture4="assets/images/cam-balkon/surgulu-cam/48.webp"
                  title5={t("Eşikli Sürgülü Cam Sistemleri")}
                  picture5="assets/images/cam-balkon/surgulu-cam/45.webp"
                  title6={t("Eşikli Sürgülü Cam Sistemleri")}
                  picture6="assets/images/cam-balkon/surgulu-cam/49.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Eşikli Sürgülü Cam Sistemleri")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Cam Balkon Sistemi")}
                    desc1={t(
                      "Eşikli Sürgülü Sistem yerden belli bir yüksekliği olan küpeşte üzerlerinde ya da işlek ve geçişi olmayan projelerde kullanabileceğiniz bir sistem olup kullanımı çok kolaydır. Diğer cam balkonlarda cam kanatların ağır ve cam olması sebebiyle açıp kapatırken özellikle hanımefendiler bu durumdan rahatsız olmaktadırlar bu sebeple Eşikli Sürgülü Sistem bu anlamda kullanıma daha uygun bir sistemdir."
                    )}
                    title2={t("Cam Balkon Aksesuarları")}
                    desc2={t(
                      "Eşikli Sürgülü Sistemlerde kullanılan tüm ürünler hammadde kalitesinin özelliğinden güneş, yağmur, soğuk, kar gibi dış hava koşullarından etkilenmeden uzun yıllar kullanabilirsiniz."
                    )}
                    desc3={t(
                      "Cam Balkonlarınız için paslanmaz, aluminyum, zamak, plastik ayaklı gibi farklı seçeneklerde tekerlerimiz bulunmaktadır. Üretmiş olduğumuz bütün tekerlerimiz gerekli yük güç testleri yapıldıktan sonra üretilmektedir."
                    )}
                    desc4={t(
                      "Eşikli Sürgülü Sistemlerde cam kanat tekerlerinin üstte kılavuzlanmasını sağlayan kasa profili (ray profili) itina ile yapılan yük taşıma testleri sonucunda beş kanallı olarak üretilmiş ve dizayn edilmiştir."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Renk Seçeneği")}
                  picture1="assets/images/cam-balkon/surgulu-cam/47.webp"
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
                  picture1="assets/images/cam-balkon/surgulu-cam/46.webp"
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
                      "Cam Balkonlarımızda 8 mm kalınlığında cam kullanılmaktadır. Bu cam kalınlığı, dayanıklılık ve estetik açıdan mükemmel bir denge sağlamak üzere tasarlanmıştır. Farklı renklerde cam seçeneği imkanı."
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

export default EsikliSurguluSistem;
