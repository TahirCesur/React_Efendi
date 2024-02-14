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

const Safir76 = () => {
  const pageDescription = "Safir 76 serisi çok katlı binalarda rüzgar yüküne karşı yüksek mukavemet sağlayan özel tasarım profillere sahiptir. ";
  const pageKeywords = "Safir 76";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/safir76";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Safir 76")}</title>
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
                  title1={t("Safir 76")}
                  picture1="assets/images/winsa/pencere-kapi-sistemleri/7.webp"
                  title2={t("Safir 76")}
                  picture2="assets/images/winsa/pencere-kapi-sistemleri/8.webp"
                  title3={t("Safir 76")}
                  picture3="assets/images/winsa/pencere-kapi-sistemleri/9.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Safir 76")}
                  slogan={t("Sürdürülebilir Bir Gelecek")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDesc
                    title1={t("Yalıtım")}
                    desc1={t(
                      "76 mm genişliğinde üretilen  Yeni Safir 76, 5 odacıklı profil yapısı, 52 mm ye kadar üçlü cam kullanımı ve yüksek bir ısı yalıtımı sağlamaktadır."
                    )}
                    title2={t("Tasarım")}
                    desc2={t(
                      "Yeni Safir 76 Pencere ve Kapı Sistemleri estetik ve yalıtımlı yapısının yanı sıra minimal bir tasarım çizgisine sahiptir. Birbirini takip eden hatları ve ekolojiyi koruyan bir sorumluluk bilincine sahip üretimi ile pencerenizi yeşil odaklı bir geleceğe açmanızı hedefler."
                    )}
                    title3={t("Donanım")}
                    desc3={t(
                      "Winsa Pvc Sistemlerine özel tek açılım, çift açılım, paralel sürme, katlanır, pivot ve güvenlikli donanım seçenekleri tüm mimari yapılara uygulanabilme özelliğine sahiptir. Winsa donanımları, Winsa Pvc Pencere, Kapı ve Sürme Sistemleri renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır."
                    )}
                    title4={t("Teknik Bilgiler")}
                    desc4={t("Profil Genişliği : 76 mm")}
                    desc5={t("Odacık Sayısı : 5")}
                    desc6={t("Sınıf : B Class - TS 5358 - EN 12608")}
                    desc7={t("Conta : TPE Gri / Siyah")}
                    desc8={t("Conta Sayısı : 2")}
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

export default Safir76;
