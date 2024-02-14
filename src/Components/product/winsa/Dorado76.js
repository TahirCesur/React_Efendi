/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../../common/Spacer2";
import { useTranslation } from "react-i18next";
import ProductCarouselTitleSlogan from "../carousel/ProductCarouselTitleSlogan";
import ProductCarouselDesc from "../carousel/ProductCarouselDesc";
import ProductCarouselShare from "../carousel/ProductCarouselShare";
import ProductCarouselWinsa from "../carousel/ProductCarouselWinsa";
import { Helmet } from "react-helmet";

const Dorado76 = () => {
  const pageDescription = "Winsa Pvc Sistemlerine özel tek açılım, çift açılım, paralel sürme, katlanır, pivot ve güvenlikli donanım seçenekleri tüm mimari yapılara uygulanabilme özelliğine sahiptir. Winsa donanımları, Winsa Pvc Pencere, Kapı ve Sürme Sistemleri renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.";
  const pageKeywords = "Dorado 76";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/dorado76";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Dorado 76")}</title>
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
                  title1={t("Dorado 76")}
                  picture1="assets/images/winsa/pencere-kapi-sistemleri/13.webp"
                  title2={t("Dorado 76")}
                  picture2="assets/images/winsa/pencere-kapi-sistemleri/14.webp"
                  title3={t("Dorado 76")}
                  picture3="assets/images/winsa/pencere-kapi-sistemleri/15.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Dorado 76")}
                  slogan={t("Yalıtımın En Estetik Hali")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDesc
                    title1={t("Yalıtım")}
                    desc1={t(
                      "76 mm genişliğinde üretilen Yeni Dorado 76, PVC sektöründe ilk kez 9 mm’lik iç-dış estetik görünümü,5 odacıklı profil yapısı, 52 mm ye kadar üçlü cam kullanımı ve düşük ısı geçirgenlik değeri ile (*Uw=0,98 W/m²K) yüksek bir ısı yalıtımı sağlamaktadır."
                    )}
                    title2={t("Tasarım")}
                    desc2={t(
                      "Yeni Dorado76 Pencere ve Kapı Sistemleri estetik ve yalıtımlı yapısının yanı sıra fütürist bir tasarım çizgisine sahiptir. Birbirini takip eden ve keskin hatlara sahip kasa-kanat yapısıyla modern cephelere de tam uyum sağlar. Çok katlı binalarda rüzgar yüküne karşı yüksek mukavemet sağlayan özel tasarım profillere sahiptir."
                    )}
                    title3={t("Donanım")}
                    desc3={t(
                      "Winsa Pvc Sistemlerine özel tek açılım, çift açılım, paralel sürme, katlanır, pivot ve güvenlikli donanım seçenekleri tüm mimari yapılara uygulanabilme özelliğine sahiptir. Winsa donanımları, Winsa Pvc Pencere, Kapı ve Sürme Sistemleri renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır."
                    )}
                    title4={t("Teknik Bilgiler")}
                    desc4={t("Profil Genişliği : 76 mm")}
                    desc5={t("Odacık Sayısı : 5")}
                    desc6={t("Sınıf : A Class - EN 12608-1")}
                    desc7={t("Conta : TPE Gri / Siyah")}
                    desc8={t("Conta Sayısı : 3")}
                    desc9={t("Çıta : Tek tırnaklı - PCE contalı")}
                    desc10={t("Cam Kalınlıkları : 24, 30, 36, 44, 52 mm")}
                  />
                </ul>

                <div className="social-media">
                  <ProductCarouselShare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default Dorado76;
