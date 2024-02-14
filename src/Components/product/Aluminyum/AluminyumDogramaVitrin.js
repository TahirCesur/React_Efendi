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

const AluminyumDogramaVitrin = () => {
  const pageDescription = "Alüminyum doğrama vitrin, ticari alanlarda kullanılan dayanıklı ve estetik bir vitrinleme çözümüdür. Bu tür vitrinler, mağazaların, ofislerin ve diğer ticari alanların dış cephelerinde ürünlerin sergilenmesi ve mekanın dikkat çekici bir şekilde tasarlanması için idealdir.";
  const pageKeywords = "Alüminyum Doğrama Vitrin";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/aluminyum-dograma-vitrin";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Alüminyum Doğrama Vitrin")}</title>
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
                  title1={t("Alüminyum Doğrama Vitrin")}
                  picture1="assets/images/aluminyum/127.webp"
                  title2={t("Alüminyum Doğrama Vitrin")}
                  picture2="assets/images/aluminyum/128.webp"
                  title3={t("Alüminyum Doğrama Vitrin")}
                  picture3="assets/images/aluminyum/129.webp"
                  title4={t("Alüminyum Doğrama Vitrin")}
                  picture4="assets/images/aluminyum/130.webp"
                  title5={t("Alüminyum Doğrama Vitrin")}
                  picture5="assets/images/aluminyum/131.webp"
                  title6={t("Alüminyum Doğrama Vitrin")}
                  picture6="assets/images/aluminyum/128.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Alüminyum Doğrama Vitrin")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("")}
                    desc1={t(
                      "Alüminyum doğrama vitrin, ticari alanlarda kullanılan dayanıklı ve estetik bir vitrinleme çözümüdür. Bu tür vitrinler, mağazaların, ofislerin ve diğer ticari alanların dış cephelerinde ürünlerin sergilenmesi ve mekanın dikkat çekici bir şekilde tasarlanması için idealdir."
                    )}
                    desc2={t(
                      "Estetik ve teknik beğenilerinizin bir arada karşılandığı Alüminyum Vitrin Doğrama, yüksek açıklıklara uygun, ısı yalıtımsız doğrama ve vitrin sistemidir."
                    )}
                    desc3={t(
                      "Alüminyumun sınırsız şekillendirme ve tasarım olanağı, çok karmaşık yalıtım detaylarının ekonomik çözümünü sağlarken; Alüminyum profillerin yüzeyi istenilen renkte elektrostatik toz fırın boya veya eloksal kaplamalı olabilmektedir."
                    )}
                    desc4={t(
                      "Alüminyum yapısı itibariyle ısı iletim katsayısı yüksek bir olmakla birlikte Polyamid ise düşük toleranslarla hassas olarak üretilebilen ısı iletim katsayısı son derece düşük, mukavemet ve sertliği ise oldukça yüksek olan bir malzemedir."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Alüminyum Doğrama Vitrin")}
                  picture1="assets/images/aluminyum/128.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Alüminyum Doğrama Vitrin")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Avantajlar")}
                    desc1={t(
                      "Hafif ve Dayanıklı: Alüminyum malzeme, hafif olmasına rağmen yüksek mukavemet sunar, bu da montaj ve taşıma süreçlerini kolaylaştırır."
                    )}
                    title2={t("")}
                    desc2={t(
                      "Estetik Çeşitlilik: Farklı renk seçenekleri ve tasarım özellikleri ile mekanın tasarımına uyum sağlar."
                    )}
                    desc3={t(
                      "Cam Alanlar: Geniş cam yüzeyleri, ürünlerin net bir şekilde görünmesini sağlar ve vitrin içine doğal ışık girmesine olanak tanır."
                    )}
                    desc4={t(
                      "Dayanıklılık: Alüminyum, dış etkenlere karşı dayanıklıdır, paslanma ve çürüme gibi sorunlara karşı uzun ömürlü bir çözüm sunar."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Alüminyum Doğrama Vitrin")}
                  picture1="assets/images/aluminyum/130.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Alüminyum Doğrama Vitrin")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Uygulamalar")}
                    desc1={t(
                      "Mağaza Vitrinleri: Perakende sektöründe ürün sergileme ve vitrinleme için kullanılır."
                    )}
                    title2={t("")}
                    desc2={t(
                      "Ofis Girişleri: Şirket ofislerinin girişlerinde marka ürünleri veya özel kampanyaların tanıtımı için kullanılır."
                    )}
                    desc3={t(
                      "Restoran ve Kafe Cepheleri: Menülerin sergilenmesi ve iç mekanın dışarıdan görünmesi için kullanılır."
                    )}
                    desc4={t(
                      "Banka ve Finans Kurumları: Şube girişlerinde bilgilendirme panoları ve ürün tanıtımları için kullanılır. Kaliteli malzeme ve profesyonel montaj ile uzun ömürlü bir kullanım sağlar."
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

export default AluminyumDogramaVitrin;
