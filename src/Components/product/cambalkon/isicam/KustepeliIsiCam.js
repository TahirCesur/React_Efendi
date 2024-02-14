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

const KupesteliIsiCam = () => {
  const pageDescription = "Bu Sistem hem Isı Camlı hem de Küpeşteli Sistemdir. Diğer sistemlerde balkon korkuluğu profil demir korkuluk gibi manzaranızı bozan materyaller bulunmaktadır. Kaliteli yaşam alanınız olan balkonlarınızda özel tasarımı sayesinde bu materyallerden ve kötü görüntüden kurtularak güzel manzara izleme imkanı sağlamaktadır.";
  const pageKeywords = "Küpeşteli Isı Cam Balkon Sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/kupesteli-isi-cam";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Küpeşteli Isı Cam Balkon Sistemleri")}</title>
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
                  title1={t("Küpeşteli Isı Cam Balkon Sistemleri")}
                  picture1="assets/images/cam-balkon/isi-cam-sistem/40.webp"
                  title2={t("Küpeşteli Isı Cam Balkon Sistemleri")}
                  picture2="assets/images/cam-balkon/isi-cam-sistem/41.webp"
                  title3={t("Küpeşteli Isı Cam Balkon Sistemleri")}
                  picture3="assets/images/cam-balkon/isi-cam-sistem/42.webp"
                  title4={t("Küpeşteli Isı Cam Balkon Sistemleri")}
                  picture4="assets/images/cam-balkon/isi-cam-sistem/43.webp"
                  title5={t("Küpeşteli Isı Cam Balkon Sistemleri")}
                  picture5="assets/images/cam-balkon/isi-cam-sistem/44.webp"
                  title6={t("Küpeşteli Isı Cam Balkon Sistemleri")}
                  picture6="assets/images/cam-balkon/isi-cam-sistem/45.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Küpeşteli Isı Cam Balkon Sistemleri")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Cam Balkon Sistemi")}
                    desc1={t(
                      "Bu Sistem hem Isı Camlı hem de Küpeşteli Sistemdir. Diğer sistemlerde balkon korkuluğu profil demir korkuluk gibi manzaranızı bozan materyaller bulunmaktadır. Kaliteli yaşam alanınız olan balkonlarınızda özel tasarımı sayesinde bu materyallerden ve kötü görüntüden kurtularak güzel manzara izleme imkanı sağlamaktadır."
                    )}
                    title2={t("Cam Balkon Aksesuarları")}
                    desc2={t(
                      "Küpeşteli Cam Balkon Sistemlerde kullanılan tüm ürünler hammadde kalitesinin özelliğinden güneş, yağmur, soğuk, kar gibi dış hava koşullarından etkilenmeden uzun yıllar kullanabilirsiniz."
                    )}
                    desc3={t(
                      "Cam Balkonlarınız için paslanmaz, aluminyum, zamak, plastik ayaklı gibi farklı seçeneklerde tekerlerimiz bulunmaktadır. Üretmiş olduğumuz bütün tekerlerimiz gerekli yük güç testleri yapıldıktan sonra üretilmektedir."
                    )}
                    desc4={t(
                      "Küpeşteli Isı Camlı Cam Balkon Sistemlerinde balkon küpeşte üst profili ile eşiksiz balkon alt kasa profili tek olarak dizayn edilerek oluşturulmuştur. Bu sistemde küpeşte ve kasa kalınlığı 4 cm olduğu için manzara seyrini engellemez."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Renk Seçeneği")}
                  picture1="assets/images/cam-balkon/isi-cam-sistem/87.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Renk Seçeneği")}
                  slogan={t("Uygun Renk Seçenekleri Sunuyoruz")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Renk Seçeneği")}
                    desc1={t(
                      "Klasik ve popüler bir seçenek olan beyaz renk, çoğu mekânda uyum sağlayabilir. Sıcak ve doğal bir görünüm sunan bronz veya kahverengi tonları, dış mekânlarda tercih edilebilir. Modern ve şık bir görünüm elde etmek isteyenler için antrasit gri veya siyah renk seçenekleri mevcuttur. Ahşap görünümü sevenler için ahşap desenli kaplamalar da bulunabilir. Bu, doğal ahşap görünümü sağlarken, dayanıklı alüminyum veya PVC malzemeleri kullanılır."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Cam Kalınlığı Seçeneği")}
                  picture1="assets/images/cam-balkon/isi-cam-sistem/41.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Cam Kalınlığı Seçeneği")}
                  slogan={t("Uygun Cam Kalınlığı Seçenekleri Sunuyoruz")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Cam Kalınlığı Seçeneği")}
                    desc1={t(
                      "Cam Balkonlarımızda 30 mm kalınlığında cam kullanılmaktadır. Bu özel cam kalınlığı, dayanıklılık ve estetik açıdan mükemmel bir denge sağlamak üzere tasarlanmıştır. Farklı renklerde cam seçeneği imkanı."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Stor Perde")}
                  picture1="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/5.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Stor Perde")}
                  slogan={t("Cam Balkon Sistemlerinde Store Perde Uygulaması")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Stor Perde")}
                    desc1={t(
                      "Cam Balkon Sistemlerinde Store Perde uygulamasını kolaylaştırmak üzere iki farklı ayar profili seçeneği bulunmaktadır. Bu da kullanımı kolaylaştıran bir rahatlık sağlamaktadır."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Küpeşteli Alt Çıkış Ağzı")}
                  picture1="assets/images/cam-balkon/isi-cam-sistem/45.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Küpeşteli Alt Çıkış Ağzı")}
                  slogan={t("Kullanım Kolaylığı")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Küpeşteli Alt Çıkış Ağzı")}
                    desc1={t(
                      "Küpeşteli Cam Balkon Sistemlerinde alt tekerlerin çıkış kısmına monte edilen poliamit esaslı plastik aparattır."
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

export default KupesteliIsiCam;
