/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import Spacer2 from "../../common/Spacer2";
import ProductCarousel from "../carousel/ProductCarousel";
import ProductCarouselTitleSlogan from "../carousel/ProductCarouselTitleSlogan";
import ProductCarouselDescCam from "../carousel/ProductCarouselDescCam";
import ProductCarouselOne from "../carousel/ProductCarouselOne";
import { Helmet } from "react-helmet";

const CamKorkulukSistemleri = () => {
  const pageDescription = "Cam korkuluk küpeşte, modern ve şık bir tasarım ile estetik ve güvenlik ihtiyaçlarını bir araya getiren bir yapı elemanıdır.";
  const pageKeywords = "Cam Korkuluk Sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/cam-korkuluk-sistemleri";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Cam Korkuluk Sistemleri")}</title>
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
                  title1={t("Cam Korkuluk Sistemleri")}
                  picture1="assets/images/aluminyum/122.webp"
                  title2={t("Cam Korkuluk Sistemleri")}
                  picture2="assets/images/aluminyum/123.webp"
                  title3={t("Cam Korkuluk Sistemleri")}
                  picture3="assets/images/aluminyum/124.webp"
                  title4={t("Cam Korkuluk Sistemleri")}
                  picture4="assets/images/aluminyum/125.webp"
                  title5={t("Cam Korkuluk Sistemleri")}
                  picture5="assets/images/aluminyum/126.webp"
                  title6={t("Cam Korkuluk Sistemleri")}
                  picture6="assets/images/aluminyum/123.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Cam Korkuluk Sistemleri")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("")}
                    desc1={t(
                      "Cam korkuluk Temperli cam aynı ebattaki iki cam arasına pvb (polivinil burital) konularak üretildiğinden kırıldığında dağılmaz. Bu sebeple güvenlik camı sınıfındadır. Temperli camlar ise istenilen ebatlarda kesilen camların yumuşama sıcaklıgına yakın bir sıcaklıktaki (700°c)  fırınlarda ısıtılıp ani soğutulmasıyla elde edilir."
                    )}
                    desc2={t(
                      "Fırından çıkan cam normal camlara göre daha sert hale geldiğinden bu camların tekrar işlem görmesi mümkün değildir. Kırıldığında ise çok küçük parçaçıklara ayrıldığı için tehlikesizdir."
                    )}
                    desc3={t(
                      "Cam korkuluk küpeşte, modern ve şık bir tasarım ile estetik ve güvenlik ihtiyaçlarını bir araya getiren bir yapı elemanıdır."
                    )}
                    desc4={t(
                      "Genellikle dış cepheler, teraslar, balkonlar ve merdivenler gibi birçok farklı alanlarda kullanılan cam korkuluklar, şeffaf ve şık bir görünüm sunarak mekanlara ferahlık ve modern bir hava katar."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Cam Korkuluk Sistemleri")}
                  picture1="assets/images/aluminyum/124.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Cam Korkuluk Sistemleri")}
                  slogan={t(
                    ""
                  )}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Avantajlar")}
                    desc1={t(
                      "Estetik Çekicilik: Şeffaf cam paneller, mekanın genel tasarımını bozmadan modern bir görünüm sağlar."
                    )}
                    title2={t("")}
                    desc2={t(
                      "Dayanıklılık: Cam malzeme, dış etkenlere karşı dirençli olup uzun ömürlü bir kullanım sunar."
                    )}
                    desc3={t(
                      "Manzara Keyfi: Şeffaf camlar, dışarıdaki manzaranın keyfini çıkarmanıza olanak tanır."
                    )}
                    desc4={t(
                      "Işığın Geçişi: Cam korkuluklar, mekanlara daha fazla doğal ışık sağlar."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Cam Korkuluk Sistemleri")}
                  picture1="assets/images/aluminyum/121.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Cam Korkuluk Sistemleri")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Uygulamalar")}
                    desc1={t(
                      "Dış Cepheler: Binaların dış cephelerinde şeffaf bir görünüm elde etmek için kullanılır."
                    )}
                    title2={t("")}
                    desc2={t(
                      "Teras ve Balkon Korkulukları: Açık alanlarda güvenliği sağlarken manzarayı engellemeden estetik bir çözüm sunar."
                    )}
                    desc3={t(
                      "Merdiven Korkulukları: İç mekan merdivenlerinde güvenlik ve estetik bir unsur olarak kullanılır."
                    )}
                    desc4={t(
                      "Özel Tasarımlar: Proje gereksinimlerine uygun özel tasarımlar ile kişiselleştirilebilir. Cam korkuluk küpeşte, modern mimari tasarımlarda kullanılan şık ve dayanıklı bir çözümdür. Kaliteli malzeme ve profesyonel montaj ile uzun ömürlü bir kullanım sağlar, mekanlara ferahlık ve şıklık katar."
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

export default CamKorkulukSistemleri;
