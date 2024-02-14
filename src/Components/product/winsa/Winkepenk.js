/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../../common/Spacer2";
import { useTranslation } from "react-i18next";
import ProductCarouselTitleSlogan from "../carousel/ProductCarouselTitleSlogan";
import ProductCarouselDesc from "../carousel/ProductCarouselDesc";
import ProductCarouselWinsa from "../carousel/ProductCarouselWinsa";
import { Helmet } from "react-helmet";

const Winkepenk = () => {
  const pageDescription = "Winkepenk pvc kepenk sistemleri uygulandığı alanlarda maksimum güneş kontrolü sağlar. Olumsuz hava şartları ve dış etkenlere karşı koruma da sağlayan kepenk sistemleri güvenli bir ortam yaratırken ısı tasarrufu için de alternatif bir çözüm yaratır.";
  const pageKeywords = "Winkepenk";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/winkepenk";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Winkepenk")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <Spacer2 />
        <div className="product-single mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 product-store-features p-5">
                <ProductCarouselWinsa
                  title1={t("Winkepenk")}
                  picture1="assets/images/winsa/panjur-kepenk-sistemleri/28.webp"
                  title2={t("Winkepenk")}
                  picture2="assets/images/winsa/panjur-kepenk-sistemleri/29.webp"
                  title3={t("Winkepenk")}
                  picture3="assets/images/winsa/panjur-kepenk-sistemleri/30.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Winkepenk")}
                  slogan={t("Her Coğrafyada Akdeniz Havası")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDesc
                    title1={t("Yalıtım")}
                    desc1={t(
                      "Winkepenk pvc kepenk sistemleri uygulandığı alanlarda maksimum güneş kontrolü sağlar. Olumsuz hava şartları ve dış etkenlere karşı koruma da sağlayan kepenk sistemleri güvenli bir ortam yaratırken ısı tasarrufu için de alternatif bir çözüm yaratır."
                    )}
                    title2={t("Tasarım")}
                    desc2={t(
                      "Winkepenk Sistemleri farklı uygulama ve renk seçenekler ile evinize muhtesem bir görsel zenginlik katan PVC kepenk sistemidir. Sistem doğramadan bağımsız olarak kasa profili ile yada direkt olarak duvar yüzeyine uygulanmaktadır. Winkepenk Sistem, uygulama yapılacak yerin özelliklerine göre kemerli kepenk yapmak mümkündür. Winkepenk Sistemde kanat içlerine lamel yada sisteme özel panel profili uygulanabilmektedir."
                    )}
                    title3={t("Donanım")}
                    desc3={t(
                      "Winkepenk Sistemleri farklı uygulama ve renk seçenekler ile evinize muhtesem bir görsel zenginlik katan PVC kepenk sistemidir. Sistem doğramadan bağımsız olarak kasa profili ile yada direkt olarak duvar yüzeyine uygulanmaktadır. Winkepenk Sistem, uygulama yapılacak yerin özelliklerine göre kemerli kepenk yapmak mümkündür. Winkepenk Sistemde kanat içlerine lamel yada sisteme özel panel profili uygulanabilmektedir."
                    )}
                    title4={t("Kepenk Sistemi")}
                    desc4={t("Cepheye açılan kanatları tek kanat veya sağa ve sola katlanır tipte çift ya da dört kanat uygulanabilmektedir. İsteğe bağlı kanat içi kanat uygulaması da bulunmaktadır.")}
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

export default Winkepenk;
