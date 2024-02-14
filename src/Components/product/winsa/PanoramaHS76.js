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

const PanoramaHS76 = () => {
  const pageDescription = "Panorama HS 76 sistem 3 metre genişliğinde, 300 kg ağırlığında kanat yapımına olanak sağlamaktadır. İlave arabalar ile 400 kg a çıkartılabilir. Winsa donanımları, Panorama HS 76 Sisteminin renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.";
  const pageKeywords = "Panorama HS 76";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/panorama-hs-76";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Panorama HS 76")}</title>
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
                  title1={t("Panorama HS 76")}
                  picture1="assets/images/winsa/surme-sistemleri/22.webp"
                  title2={t("Panorama HS 76")}
                  picture2="assets/images/winsa/surme-sistemleri/23.webp"
                  title3={t("Panorama HS 76")}
                  picture3="assets/images/winsa/surme-sistemleri/24.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Panorama HS 76")}
                  slogan={t("Minimum Eşik Maksimum Genişlik Panoramik Görünüm")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDesc
                    title1={t("Yalıtım")}
                    desc1={t(
                      "Panorama HS 76 sistemi; 175 mm kasa genişliği, 8 odacık, 39 mm’ye kadar çift cam, üçlü cam üniteleri ve panel kullanımı sağlayan çıta profilleri bulunmaktadır. Özel tasarlanan epdm contaları, kanat yapısı ve sızdırmazlık parçaları ile benzerlerine göre üst düzeyde ısı, hava, su ve toz yalıtımı sağlar. Kanat profilinde sahip olduğu büyük destek sacı odacığı sayesinde de rüzgar yüklerine karşı maksimum dayanım konforu sunar."
                    )}
                    title2={t("Tasarım")}
                    desc2={t(
                      "Panorama HS 76 sistemi düşük eşik taleplerini 20 mm yüksekliğindeki alüminyum eşik profili ile sorunsuz karşılanmaktadır. Sağladığı geniş cam açıklıkları ile uygulandığı alanlarda panoramik görsellik oluşturulmasına olanak verir. Panorama HS 76 sisteminde 2’li, 3’lü ve 4’lü kanat uygulamaları yapılabilir."
                    )}
                    title3={t("Donanım")}
                    desc3={t(
                      "Panorama HS 76 sistem 3 metre genişliğinde, 300 kg ağırlığında kanat yapımına olanak sağlamaktadır. İlave arabalar ile 400 kg a çıkartılabilir. Winsa donanımları, Panorama HS 76 Sisteminin renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır."
                    )}
                    title4={t("Teknik Bilgiler")}
                    desc4={t("Profil Genişliği : Kasa 175mm / Kanat 76mm")}
                    desc5={t("Odacık Sayısı : Kasa 8 / Kanat 4")}
                    desc6={t("Sınıf : A Sınıfı (TS EN 12608-1)")}
                    desc7={t("Conta : TPE Gri / Siyah")}
                    desc8={t("Conta Sayısı : 2 (iç-dış)")}
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

export default PanoramaHS76;
