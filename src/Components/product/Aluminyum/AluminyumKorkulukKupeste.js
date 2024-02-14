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

const AluminyumKorkulukKupeste = () => {
  const pageDescription = "Alüminyum küpeşte günümüzde en çok tercih edilen merdiven korkuluğu modellerindendir. Gerek fiyat gerekse estetik açıdan uygun olmasının yanı sıra paslanmaya dayanıklı olması ve hızlı takılır sökülür olması da çok rağbet görme sebeplerindendir.";
  const pageKeywords = "Alüminyum Korkuluk Küpeşte";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/aluminyum-korkuluk-kupeste";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Alüminyum Korkuluk Küpeşte")}</title>
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
                  title1={t("Alüminyum Korkuluk Küpeşte")}
                  picture1="assets/images/aluminyum/117.webp"
                  title2={t("Alüminyum Korkuluk Küpeşte")}
                  picture2="assets/images/aluminyum/118.webp"
                  title3={t("Alüminyum Korkuluk Küpeşte")}
                  picture3="assets/images/aluminyum/119.webp"
                  title4={t("Alüminyum Korkuluk Küpeşte")}
                  picture4="assets/images/aluminyum/120.webp"
                  title5={t("Alüminyum Korkuluk Küpeşte")}
                  picture5="assets/images/aluminyum/121.webp"
                  title6={t("Alüminyum Korkuluk Küpeşte")}
                  picture6="assets/images/aluminyum/120.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Alüminyum Korkuluk Küpeşte")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("")}
                    desc1={t(
                      "Alüminyum küpeşte günümüzde en çok tercih edilen merdiven korkuluğu modellerindendir. Gerek fiyat gerekse estetik açıdan uygun olmasının yanı sıra paslanmaya dayanıklı olması ve hızlı takılır sökülür olması da çok rağbet görme sebeplerindendir."
                    )}
                    desc2={t(
                      "Alüminyum korkulukların çok kullanılmasının başlıca sebebi piyasada birçok farklı renk ve desenin ve bu desenlere uygun aparatlarının bolca bulunmasıdır. Bu aparat, renk ve desenler kullanılarak sınırsız seçenekte model üretilebilmektedir.Bu modellerden beğendiğinizi yaptırabilir dilerseniz düşündüğünüz model hakkında bize bir fikir verip size özel modeli  bulmamıza yardımcı olabilirsiniz."
                    )}
                    desc3={t(
                      "Alüminyum korkulukların en çok tercih edilen modeli yuvarlak boru şeklinde olanıdır. Montajının daha kolay olması, bununla beraber fiyatınında daha düşük tutulması buna sebep gösterilebilir. Fakat ahşap tutamaklı  ve camlı olarak kullanma seçenekleri de mevcuttur.   Alüminyum korkuluklar kesinlikle paslanmazdır. Bu sebepten dış mekanlarda gönül rahatlığıyla kullanılabilir. Ayrıca ısıya karşı dayanıklı olması nedeniyle de özellikle yangın merdivenlerinde kullanılması tavsiye edilir.  Hem görüntü hem dayanıklılık hem de fiyat açısından tavsiye edilebilecek bir korkuluk çeşididir."
                    )}
                    desc4={t(
                      "Alüminyum korkuluk küpeşte, modern mimari tasarımlarda güvenlik ve estetik unsurları bir araya getiren dayanıklı bir çözümdür. Bu ürün, dış cephe korkuluk sistemleri, teras korkulukları, merdiven korkulukları ve balkon korkulukları gibi farklı uygulamalarda kullanılabilir."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Alüminyum Korkuluk Küpeşte")}
                  picture1="assets/images/aluminyum/120.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Alüminyum Korkuluk Küpeşte")}
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
                      "Pas ve Çürüme Direnci: Alüminyum, dış etkenlere karşı dayanıklıdır, paslanma ve çürüme gibi sorunlara karşı uzun ömürlü bir çözüm sunar."
                    )}
                    desc3={t(
                      "Estetik Çeşitlilik: Farklı renk seçenekleri ve tasarım özellikleri ile mekanın tasarımına uyum sağlar, şeffaf veya desenli cam panellerle kombinlenebilir."
                    )}
                    desc4={t(
                      "Bakım Kolaylığı: Temizlik ve bakım gereksinimleri minimaldir, düzenli temizlikle uzun yıllar boyunca ilk günkü görünümünü korur."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Alüminyum Korkuluk Küpeşte")}
                  picture1="assets/images/aluminyum/121.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Alüminyum Korkuluk Küpeşte")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Uygulamalar")}
                    desc1={t(
                      "Dış Cephe Korkulukları: Binaların dış cephelerinde güvenliği artırmak ve estetik bir görünüm sağlamak için kullanılır."
                    )}
                    title2={t("")}
                    desc2={t(
                      "Teras ve Balkon Korkulukları: Açık alanlarda güvenliği sağlarken manzarayı engellemeden estetik bir çözüm sunar."
                    )}
                    desc3={t(
                      "Merdiven Korkulukları: İç mekanlarda veya dış merdivenlerde güvenliği destekler."
                    )}
                    desc4={t(
                      "Özel Tasarımlar: Proje gereksinimlerine uygun özel tasarımlar ile kişiselleştirilebilir."
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

export default AluminyumKorkulukKupeste;
