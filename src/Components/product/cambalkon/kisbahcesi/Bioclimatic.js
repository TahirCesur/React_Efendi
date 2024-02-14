/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../../../common/Spacer2";
import { useTranslation } from "react-i18next";
import ProductCarousel from "../../carousel/ProductCarousel";
import ProductCarouselTitleSlogan from "../../carousel/ProductCarouselTitleSlogan";
import ProductCarouselDescCam from "../../carousel/ProductCarouselDescCam";
import ProductCarouselOne from "../../carousel/ProductCarouselOne";
import ProductCarouselDescOne from "../../carousel/ProductCarouselDescOne";
import { Helmet } from "react-helmet";

const Bioclimatic = () => {
  const pageDescription = "BIOCLIMATIC, kendi ekseninde paralelde hareket ederek geriye toplanabilen otomatik, tamamen alüminyum sistemdir. ";
  const pageKeywords = "Bioclimatic Kış Bahçesi";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/bioclimatic";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Bioclimatic Sistemleri Kış Bahçesi")}</title>
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
                  title1={t("Bioclimatic Sistemleri Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/91.webp"
                  title2={t("Bioclimatic Sistemleri Kış Bahçesi")}
                  picture2="assets/images/cam-balkon/kis-bahcesi/92.webp"
                  title3={t("Bioclimatic Sistemleri Kış Bahçesi")}
                  picture3="assets/images/cam-balkon/kis-bahcesi/93.webp"
                  title4={t("Bioclimatic Sistemleri Kış Bahçesi")}
                  picture4="assets/images/cam-balkon/kis-bahcesi/94.webp"
                  title5={t("Bioclimatic Sistemleri Kış Bahçesi")}
                  picture5="assets/images/cam-balkon/kis-bahcesi/95.webp"
                  title6={t("Bioclimatic Sistemleri Kış Bahçesi")}
                  picture6="assets/images/cam-balkon/kis-bahcesi/91.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Bioclimatic Kış Bahçesi")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t(
                      "Her mekanda uygulanabilir Bioclimatic sistemler!"
                    )}
                    desc1={t(
                      "BIOCLIMATIC, kendi ekseninde paralelde hareket ederek geriye toplanabilen otomatik, tamamen alüminyum sistemdir. Özel ve ticari kapsamda uygulama alanlarında, projenize özel çözümler üreterek maksimum kullanılabilirlik ve konforla beraber mekanlarınıza şıklık sağlar. Çatıdan havalandırma yaparken gölgelendirme özelliğini kaybetmez !"
                    )}
                    title2={t("Uzaktan Kumandalı!")}
                    desc2={t(
                      "Kendi ekseninde dikeyde hareket ederek otomatik geriye toplanabilen tamamen alüminyum sistemdir."
                    )}
                    desc3={t("Özel ve ticari uygulama alanlarında,")}
                    desc4={t(
                      "Projenize özel çözümler üreterek maksimum kullanılabilirlik , Konforla beraber mekanlarınıza şıklık sağlar."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Bioclimatic Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/91.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Bioclimatic Kış Bahçesi")}
                  slogan={t(
                    "Gün ışığından istenilen oranda faydalanma olanağı sağlar."
                  )}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Bioclimatic Kış Bahçesi")}
                    desc1={t(
                      "Yağmur ve kardan etkilenmeden havalandırma sağlar. Katlanma ve toplanma hareketini bir arada sunmaktadır. Gün ışığından istenilen oranda faydalanma olanağı sağlar."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Bioclimatic Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/94.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Bioclimatic Kış Bahçesi")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Kolay Temizlenebilir")}
                    desc1={t(
                      "Panellerin dış temizliği çatıya çıkmaya gerek kalmadan içeriden temizlenebilir!"
                    )}
                    title2={t("Bioclimatic Kış Bahçesi Avantajları")}
                    desc2={t(
                      "Katlanma ve toplanma hareketini bir arada sunmaktadır. Gün ışığından istenilen oranda faydalanma olanağı sağlar."
                    )}
                    desc3={t(
                      "Çatıdan havalandırma yaparken gölgelendirme özelliğini kaybetmez. Yağmur ve kardan etkilenmeden havalandırma sağlar. Panellerin dış temizliği çatıya çıkmaya gerek kalmadan içeriden temizlenebilir."
                    )}
                    desc4={t(
                      "Elektrostatik fırın boya ile renklendirilir; istenilen her renkte uygulama yapılır. Bioclimatic Sistemleri sigara yasağının uygulandığı restoran ve kafe gibi yerler için en iyi çözümdür."
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

export default Bioclimatic;
