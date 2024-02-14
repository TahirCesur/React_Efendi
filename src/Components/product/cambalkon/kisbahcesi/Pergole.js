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

const Pergole = () => {
  const pageDescription = "Pergolalar, açıklıkları yatay, kavisli ve çatı şeklinde kapatılarak gölgeli bir alan oluşturmak amacıyla yapılan tentelerdir ve istendiğinde tamamen açılabilir veya kapanabilirler.";
  const pageKeywords = "Pergole Kış Bahçesi";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/pergole";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Pergole Sistemleri Kış Bahçesi")}</title>
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
                  title1={t("Pergole Sistemleri Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/101.webp"
                  title2={t("Pergole Sistemleri Kış Bahçesi")}
                  picture2="assets/images/cam-balkon/kis-bahcesi/102.webp"
                  title3={t("Pergole Sistemleri Kış Bahçesi")}
                  picture3="assets/images/cam-balkon/kis-bahcesi/103.webp"
                  title4={t("Pergole Sistemleri Kış Bahçesi")}
                  picture4="assets/images/cam-balkon/kis-bahcesi/104.webp"
                  title5={t("Pergole Sistemleri Kış Bahçesi")}
                  picture5="assets/images/cam-balkon/kis-bahcesi/105.webp"
                  title6={t("Pergole Sistemleri Kış Bahçesi")}
                  picture6="assets/images/cam-balkon/kis-bahcesi/103.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Pergole Kış Bahçesi")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Lüx Seri Açılır Pencere Pergole Sistemleri !")}
                    desc1={t(
                      "Pergola, Latince’de saçak anlamına gelen “pergule” kelimesinden türemiştir ve İtalyan dilinde gölgelik anlamında kullanılır. Pergola, açıklıkların yatay, bükümlü ve çatı şeklinde kapatılarak gölgelik alan oluşturmak amacıyla yapılan tentenin istenildiğinde tamamen açılabilir, istenildiğinde tamamen kapanabilir ürünlerdir."
                    )}
                    title2={t("Pergole !")}
                    desc2={t(
                      "Tente; sistemin üstünden bulunan motor sayesinde ray profilinde bulunan tekerler ile hareket eder. Motor çelik kayış ile hareketi aktarmaktadır. Böylelikle dönen motor tentenin aşağı yukarı hareket etmesini sağlamaktadır."
                    )}
                    desc3={t(
                      "Sistemin etrafı sürme, katlanır ve giyotin cam ürünleri ile kapatılıp kış bahçesi olarak da kullanılabilir."
                    )}
                    desc4={t(
                      "Konforla beraber mekanlarınıza şıklık sağlar."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Pergole Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/103.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Pergole Kış Bahçesi")}
                  slogan={t("Gün ışığından istenilen oranda faydalanma olanağı sağlar.")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Pergole Kış Bahçesi Aydınlatma")}
                    desc1={t(
                      "Raylı tente sisteminde 24 Volt, Samsung A+ Gün ışığı LED veya beyaz aydınlatma sistemi kullanılmalıdır. Led aydınlatmalar IP65 koduna tabiidir. 0.150 mA akım ile çalışır. Kullanılan Ledler 3w powerled ile m2 ye 1 adet gelecek şekilde dizayn edilmelidir. Özel tasarım kalıp polikarbon malzeme 700 Lümen, 3000 Kelvin olmalıdır. Ampul değişimi kadar basit led değişim imkanı sağlayan tasarıma sahip olmalıdır."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Pergole Kış Bahçesi")}
                  picture1="assets/images/cam-balkon/kis-bahcesi/104.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Pergole Kış Bahçesi")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Tente")}
                    desc1={t(
                      "Tente kumaşı blackout kumaş branda olmalıdır. Tente -30 C ve 70 C sıcaklığa dayanıklı olmalıdır. Ateş önleyici bir yapıya sahip olmalıdır."
                    )}
                    title2={t("Pergole Kış Bahçesi Aksam ve Uygulama")}
                    desc2={t(
                      "Taşıyıcı teker takımlarında kullanılan rulmanlar, sessiz ve konforlu dönüşü sağlamak üzere birincil sınıf hammaddeli plastiklerinden olan cam takviyeli polyamid malzeme ile kaplanmış olmalıdır. Taşıyıcı teker takımlarında kullanılan tüm bileşenler paslanmaz çelik (Stainless Steel – SS) malzeme kullanılarak üretilmiş olmalıdır."
                    )}
                    desc3={t(
                      "Sistemin taşıyıcı motoru; en az 120Nm taşıma kapasitesine sahip olmalıdır.Sistemin taşıyıcı motoru; Avrupa (İtalya, Fransa, Almanya vb.) menşeili olmalıdır. Sistemde kullanılan motor hareketi aktarma parçaları paslanmaz ya da paslanmayı engelleyecek kaplamaya sahip olmalıdır. Sistemde kayış uzunluğunun ayarlamasını sağlayan özel paslanmaz ayar aparatı bulunmalıdır."
                    )}
                    desc4={t(
                      "Su tahliye delikleri en az 70mm uçlu matkap ile orijinal yatak içinden profile görsel zarar vermeyecek şekilde açılmalıdır. Sistemde, yalıtımı üst düzeye çıkarmak için, ray profili ile tente birleşimlerinde, duvar bitimlerinde, ray-panel arası tüm çalışma boşluklarında izalasyon fırçaları/contaları olmalıdır. Bu elemanlar, konforlu hareketi engellememelidir. Açma-kapama sırasında tente rahat ve sessiz hareket etmelidir. Sistem kullanılan yan kapaklar çelik ve paslanmaz olmalıdır. Vida deliklerinden alt duvar içine su sızıntılarını önlemek amaçlı vidaların diplerine özel plastik sızdırmazlık pulları veya yalıtım ürünü kullanılmalıdır."
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

export default Pergole;
