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

const ComfortSlide = () => {
  const pageDescription = "Comfort Slide Sürme Sistemine özel olarak tasarlanan donanımı sayesinde açma ve kapama fonksiyonlarında oldukça kolay ve konforlu bir kullanım deneyimi sunar. ";
  const pageKeywords = "Comfort Slide";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/comfort-slide";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Comfort Slide")}</title>
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
                  title1={t("Comfort Slide")}
                  picture1="assets/images/winsa/surme-sistemleri/16.webp"
                  title2={t("Comfort Slide")}
                  picture2="assets/images/winsa/surme-sistemleri/17.webp"
                  title3={t("Comfort Slide")}
                  picture3="assets/images/winsa/surme-sistemleri/18.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Comfort Slide")}
                  slogan={t("Kolay Kullanımı İle Kontrol Sizin Elinizde")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDesc
                    title1={t("Yalıtım")}
                    desc1={t(
                      "Comfort Slide PVC sürme kapı ve pencere sisteminde, özel tasarıma sahip 149 mm genişliğinde, 6 odacıklı kasa ve 76 mm genişliğinde kanat profilleri ısı ve ses yalıtımı performasını benzer PVC sürme kapı ve pencere sistemlerine göre daha üst seviyeye çıkarır. Özel tasarlanan donanımı ve 52 mm kadar üçlü cam uygulanabilmesi ısı iletim katsayısı değerini minimuma indirir."
                    )}
                    title2={t("Tasarım")}
                    desc2={t(
                      "Comfort Slide PVC sürme kapı ve pencere sistemi, bilinen tüm sürme uygulamalarından farklı bir bakış açısı ile , kullanıldığı mekana daha fazla yaşam alanı kazandırmanın yanı sıra kolay kullanım ve sızdırmazlığın çok daha güçlü olması hedeflenerek uluslararası deneyimlerden kazanılan tecrübe ve profesyonellikle tasarlandı. Comfort Slide sürme kapı ve pencere sistemi estetik yapısıyla maksimum görüş alanı sağlarken mimari projelerde farklı tarzların yansıtılmasına imkân verir."
                    )}
                    title3={t("Donanım")}
                    desc3={t(
                      "Comfort Slide Sürme Sistemine özel olarak tasarlanan donanımı sayesinde açma ve kapama fonksiyonlarında oldukça kolay ve konforlu bir kullanım deneyimi sunar. Winsa donanımları, Comfort Slıde Sürme Sisteminin renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır."
                    )}
                    title4={t("Teknik Bilgiler")}
                    desc4={t("Kasa Profil Genişliği : 149 mm")}
                    desc5={t("Kanat Profil Genişliği : 76 mm")}
                    desc6={t("Kasa Odacık Sayısı : 5")}
                    desc7={t("Kanat Odacık Sayısı : 5")}
                    desc8={t("Sınıf : B Class - TS 5358 - EN 12608")}
                    desc9={t("Conta : TPE Gri / Siyah")}
                    desc10={t("Conta Sayısı : 2")}
                    desc11={t("Çıta : Tek tırnaklı - PCE contalı")}
                    desc12={t("Cam Kalınlıkları : 24, 30, 36, 44, 52 mm")}
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

export default ComfortSlide;
