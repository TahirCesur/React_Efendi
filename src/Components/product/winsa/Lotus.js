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

const Lotus = () => {
  const pageDescription = "Türkiye’ye tek ve Winsa’ya özel olarak tasarlanan Lotus Eksenel Sürme Sistemi 122 mm genişliğinde iki eksenli, 113 mm genişliğinde tek eksenli ve kendinden pervazlı kasa seçeneklerine sahiptir. Sürme sistemleri içerisinde optimum yalıtım değeri sağlar. 28 mm ye kadar çift cam kullanımı ile ısı ve ses yalıtımı sağlamaktadır.";
  const pageKeywords = "Lotus";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/lotus";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Lotus")}</title>
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
                  title1={t("Lotus")}
                  picture1="assets/images/winsa/surme-sistemleri/19.webp"
                  title2={t("Lotus")}
                  picture2="assets/images/winsa/surme-sistemleri/20.webp"
                  title3={t("Lotus")}
                  picture3="assets/images/winsa/surme-sistemleri/21.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Lotus")}
                  slogan={t("Minimal Tasarım Hatları İle Winsa Özel Eksenel Sistemi")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDesc
                    title1={t("Yalıtım")}
                    desc1={t(
                      "Türkiye’ye tek ve Winsa’ya özel olarak tasarlanan Lotus Eksenel Sürme Sistemi 122 mm genişliğinde iki eksenli, 113 mm genişliğinde tek eksenli ve kendinden pervazlı kasa seçeneklerine sahiptir. Sürme sistemleri içerisinde optimum yalıtım değeri sağlar. 28 mm ye kadar çift cam kullanımı ile ısı ve ses yalıtımı sağlamaktadır."
                    )}
                    title2={t("Tasarım")}
                    desc2={t(
                      "LOTUS Sürme Sistemi, Winsa’nın uzman kadrosunun uluslararası deneyimleriyle, bilinen sürme sistemlerden farklı bir bakış açısı ile tasarlanmıştır. Kanatlar kasa içine gömülü olduğu için kanatların dışarıya çıkıntısı görülmez. Estetik hatlara sahip şık tasarımı olan LOTUS Sürme Sistemi, düşük kasa ve kanat profil yüksekliğiyle daha fazla cam alanına sahiptir. Bu özelliği sayesinde tüm mekânlara daha geniş manzara, daha aydınlık ve ferah iç ortam sağlamaktadır."
                    )}
                    title3={t("Donanım")}
                    desc3={t(
                      "Lotus Eksenel Sürme Sistemine uyumlu tasarlanan kullanım kolaylığı sağlayan donanımlar kullanılmaktadır. Winsa donanımları, Lotus Sisteminin renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır."
                    )}
                    title4={t("Teknik Bilgiler")}
                    desc4={t("Kasa Profil Genişliği : 122 mm")}
                    desc5={t("Kanat Profil Genişliği : 45 mm")}
                    desc6={t("Kasa Odacık Sayısı : 4")}
                    desc7={t("Sınıf : B Class - TS 5358 - EN 12608")}
                    desc8={t("Conta : TPE Gri / Siyah")}
                    desc9={t("Çıta : Tek tırnaklı - PCE contalı")}
                    desc10={t("Cam Kalınlıkları : 4, 5, 20, 24, 28 mm")}
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

export default Lotus;
