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
import { Helmet } from "react-helmet";

const VerandaSabitCamTavan = () => {
  const pageDescription = "Veranda Sabit cam tavan kış bahçelerine, teras ve balkon üstlerine yapılabilen bir sistemdir. Kendinden oluklu bir yapıya sahiptir. Dikey profiller içerisine Pvc borular gizlenir. Led ışık veya şerit led uygulanabilir. ";
  const pageKeywords = "Veranda Sabit Cam Tavan Kış Bahçesi";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/veranda-sabit-cam-tavan";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Veranda Sabit Cam Tavan Kış Bahçesi")}</title>
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
                  title1={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/111.webp"
                  title2={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  picture2="assets/images/cam-balkon/kis-bahcesi/112.webp"
                  title3={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  picture3="assets/images/cam-balkon/kis-bahcesi/113.webp"
                  title4={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  picture4="assets/images/cam-balkon/kis-bahcesi/114.webp"
                  title5={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  picture5="assets/images/cam-balkon/kis-bahcesi/115.webp"
                  title6={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  picture6="assets/images/cam-balkon/kis-bahcesi/112.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("")}
                    desc1={t(
                      "Boya: Tüm ral renklere boyanabilir. İstenilirse kaplama veya transfer baskı boya ile istenilen ahşap deseninde boyama veya kaplama yapılabilir."
                    )}
                    title2={t("Sisteme özel 110×145 tasarlanmış alüminyum profil")}
                    desc2={t(
                      "Çatı Camı: (4+4 – 5+5 – 6+6) Lamine + Argon gazlı ısıcam + 6 mm Temperli Sun energy. özel tasarım alüminyum..."
                    )}
                    desc3={t(
                      "Çatı Camı: (4+4 – 5+5 – 6+6) Lamine + Argon gazlı ısıcam + 6 mm Temperli Sun energy"
                    )}
                    desc4={t("Oluk ve Direkler: Sisteme özel tasarlanmış alüminyum profillerden yapılan oluk profilimiz yine sistem özel olarak tasarlanmış olan taşıyıcı direk profillerimizin oluk profiline bağlanmasıyla çatıdan gelen su direklerdeki Pvc borulardan tahliye edilir.")}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/114.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  slogan={t(
                    "Her mekanda uygulanabilir Veranda Sabit Cam Tavan sistemleri!"
                  )}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("")}
                    desc1={t(
                      "Sabit cam tavan kış bahçelerine, teras ve balkon üstlerine yapılabilen bir sistemdir. Kendinden oluklu bir yapıya sahiptir. Dikey profiller içerisine Pvc borular gizlenir. Led ışık veya şerit led uygulanabilir. Sistem de polikarbon, 8 mm temperli cam, ısıcamlı 4+4 veya 5+5 lamine cam veya temperli cam kullanılabilir. Teras, Kış Bahçesi, Cafe, Restaurant, Lokanta, Pastane gibi mekanlarda tavan kapatmak ve nezih bir ortam yaratmak için kullanılan bir sistemdir. Gün ışığından istenilen oranda faydalanma olanağı sağlar."
                    )}
                    title2={t(
                      "Olumsuz Hava koşulları ve Perde Kullanımına Uygun"
                    )}
                    desc2={t(
                      "Yağmur ve kardan etkilenmeden havalandırma sağlar."
                    )}
                    desc3={t(
                      "Veranda Sabit Cam Tavan’a perde ekleyerek güneşten korunabilirsiniz."
                    )}
                    desc4={t("Perde kullanımına uygundur.")}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/115.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Veranda Sabit Cam Tavan Kış Bahçesi")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("")}
                    desc1={t(
                      "Sabit cam tavan sistemlerini kullanarak veranda, restaurant, cafe, kış bahçesi ve teras kapamalarında projelerinizin modern bir görünüme kavuşmasını sağlayabilirsiniz. Cam Balkon olarak projelerinizde birbirinden farklı tasarımlar sunmaktayız. Teras, Kış Bahçesi, Cafe, Restaurant, Lokanta, Pastane gibi mekanlarda tavan kapatmak ve nezih bir ortam yaratmak için kullanılan bir sistemdir."
                    )}
                    title2={t("Sabit Cam Tavan Kış Bahçesi Avantajları")}
                    desc2={t(
                      "Veranda, Teras, Kış Bahçesi, Cafe, Restaurant, Lokanta, Pastane gibi mekanlarda tavan kapatmak ve nezih bir ortam yaratmak için kullanılan bir sistemdir. Mevsimsel etkilerden mekanları korur."
                    )}
                    desc3={t(
                      "Kötü hava şartları, toz, gürültü gibi dış etkenlerden korunmanızı sağlar."
                    )}
                    desc4={t(
                      "Uygulandığı yapının yalıtımı artırarak ısınma giderlerini azaltır, korozyonu azaltarak yapının ömrünü uzatır."
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

export default VerandaSabitCamTavan;
