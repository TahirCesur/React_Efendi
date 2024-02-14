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

const Winstor = () => {
  const pageDescription = "Winsa Pvc Pencere Kapı ve Panjur Sistemleri; her türlü yapının kapı ve pencerelerine kolayca uygulanır. Dısarıda hava kosulları ne olursa olsun mevsimlerin kontrolünü sağlayan tüm PVC pencere ve kapı sistemleri ile uyumlu, sık tasarımı ve üstün yalıtım kalitesi ile benzersizdir.";
  const pageKeywords = "Winstor";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/winstor";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Winstor")}</title>
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
                  title1={t("Winstor")}
                  picture1="assets/images/winsa/panjur-kepenk-sistemleri/25.webp"
                  title2={t("Winstor")}
                  picture2="assets/images/winsa/panjur-kepenk-sistemleri/26.webp"
                  title3={t("Winstor")}
                  picture3="assets/images/winsa/panjur-kepenk-sistemleri/27.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Winstor")}
                  slogan={t("Mevsim Kontrolü Sağlayan Şık Tasarım")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDesc
                    title1={t("Yalıtım")}
                    desc1={t(
                      "Winsa Pvc Pencere Kapı ve Panjur Sistemleri; her türlü yapının kapı ve pencerelerine kolayca uygulanır. Dısarıda hava kosulları ne olursa olsun mevsimlerin kontrolünü sağlayan tüm PVC pencere ve kapı sistemleri ile uyumlu, sık tasarımı ve üstün yalıtım kalitesi ile benzersizdir."
                    )}
                    title2={t("Tasarım")}
                    desc2={t(
                      "Winstor Pvc Panjur Sistemleri farklı uygulama ve renk seçenekler ile evinize muhtesem bir görsel zenginlik katan monoblok panjur sistemidir. Winsa Pvc Pencere Kapı ve Panjur Sistemlerinde, 37 mm lamel (mini panjur) ve 55 mm lamel kullanımına imkan veren PVC yan ve orta dikmeler mevcuttur."
                    )}
                    title3={t("Donanım")}
                    desc3={t(
                      "Winstor Pvc Panjur sistemi serilerimiz ile uygulanabilen manuel ve motorlu kullanım seçenekleri sunmaktadır. Winsa Pvc Pencere Kapı ve Panjur Sistemleri sürme ve stor sineklik uygulamalarına olanak sağlayan yardımcı profiller sunmaktadır."
                    )}
                    title4={t("Teknik Bilgiler")}
                    desc4={t("Dışarıda hava koşulları ne olursa olsun mevsimlerin kontrolünü sağlayan tüm PVC pencere ve kapı sistemleri ile uyumlu, şık tasarımı ve üstün yalıtım kalitesi ile benzersizdir.")}
                    desc5={t("185*185 Kutu")}
                    desc6={t("220*220 Yalıtımlı Kutu")}
                    desc7={t("220*225 Kutu")}
                    desc8={t("Stor Sineklik Uygulanabilir")}
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

export default Winstor;
