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

const Safir = () => {
  const pageDescription = "Safir serisi çok katlı binalarda rüzgar yüküne karşı yüksek mukavemet sağlayan özel tasarım profillere sahiptir. ";
  const pageKeywords = "Safir";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/safir";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Safir")}</title>
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
                  title1={t("Safir")}
                  picture1="assets/images/winsa/pencere-kapi-sistemleri/10.webp"
                  title2={t("Safir")}
                  picture2="assets/images/winsa/pencere-kapi-sistemleri/11.webp"
                  title3={t("Safir")}
                  picture3="assets/images/winsa/pencere-kapi-sistemleri/12.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Safir")}
                  slogan={t("Oval Tasarım Hatları ile Estetik Görünüm")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDesc
                    title1={t("Yalıtım")}
                    desc1={t(
                      "70 mm genişliğinde üretilen Safir, 5 odacıklı profil yapısı, 39 mm ye kadar çift yada üçlü cam kullanımı ile ısı ve ses yalıtımı sağlamaktadır."
                    )}
                    title2={t("Tasarım")}
                    desc2={t(
                      "Safir serisi çok katlı binalarda rüzgar yüküne karşı yüksek mukavemet sağlayan özel tasarım profillere sahiptir. Sisteme özel tasarlanan damlalıklı kanat ve kendinden pervazlı kasa profili seçeneği ile iç yüzeylerde görsel bütünlük sağlarken, içe-dışa açılan eşikli-eşiksiz kapı seçenekleriyle de farklı mimari talepleri karşılar."
                    )}
                    title3={t("Donanım")}
                    desc3={t(
                      "Winsa Pvc Sistemlerine özel tek açılım, çift açılım, sürme, katlanır, pivot ve güvenlikli donanım seçenekleri tüm mimari yapılara uygulanabilme özelliğine sahiptir. Winsa donanımları, Winsa Pvc Pencere, Kapı ve Sürme Sistemleri renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır."
                    )}
                    title4={t("Teknik Bilgiler")}
                    desc4={t("Profil Genişliği : 70 mm")}
                    desc5={t("Odacık Sayısı : 5")}
                    desc6={t("Sınıf : B Class - TS 5358 - EN 12608")}
                    desc7={t("Conta : TPE Gri / Siyah")}
                    desc8={t("Conta Sayısı : 2")}
                    desc9={t("Çıta : Tek tırnaklı - PCE contalı")}
                    desc10={t("Cam Kalınlıkları : 4, 10, 20, 24, 26, 30, 36, 39 mm")}
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

export default Safir;
