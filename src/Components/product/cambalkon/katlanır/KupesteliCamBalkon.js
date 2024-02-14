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

const KupesteliCamBalkon = () => {
  const pageDescription = "Küpeşteli Cam Balkon Sisteminde alışılmışın dışında diğer sistemlerde olan balkon korkuluğu, profil, demir korkuluk gibi manzaranızı bozan materyaller bulunmamaktadır. ";
  const pageKeywords = "Küpeşteli Cam Balkon Sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/kupesteli-cam-balkon";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Küpeşteli Cam Balkon Sistemleri")}</title>
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
                  title1={t("Küpeşteli Cam Balkon Sistemleri")}
                  picture1="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/19.webp"
                  title2={t("Küpeşteli Cam Balkon Sistemleri")}
                  picture2="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/20.webp"
                  title3={t("Küpeşteli Cam Balkon Sistemleri")}
                  picture3="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/21.webp"
                  title4={t("Küpeşteli Cam Balkon Sistemleri")}
                  picture4="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/22.webp"
                  title5={t("Küpeşteli Cam Balkon Sistemleri")}
                  picture5="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/23.webp"
                  title6={t("Küpeşteli Cam Balkon Sistemleri")}
                  picture6="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/24.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Küpeşteli Cam Balkon Sistemleri")}
                  slogan={t("")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescCam
                    title1={t("Cam Balkon Sistemi")}
                    desc1={t(
                      "Küpeşteli Cam Balkon Sisteminde alışılmışın dışında diğer sistemlerde olan balkon korkuluğu, profil, demir korkuluk gibi manzaranızı bozan materyaller bulunmamaktadır. Kaliteli yaşam alanınız olan balkonlarınızda özel tasarımı sayesinde bu materyallerden ve kötü görüntüden kurtularak güzel manzara izleme imkanı sağlamaktadır."
                    )}
                    title2={t("Cam Balkon Fitili")}
                    desc2={t(
                      "Cam balkon uygulamaları artık günümüzde standart uygulamalar haline dönüştü. Fakat modern görüntüsünün yanı sıra cam balkon fitili gibi belirli aralıklarla değiştirilmesi gereken yönlerinin olduğunu unutmamak gerekiyor."
                    )}
                    desc3={t(
                      "Dilerseniz firmamız bu çalışmayı oldukça profesyonel şekilde gerçekleştiriyor ve izolasyon bakımından cam balkonunuz adeta yenilenmiş oluyor. "
                    )}
                    desc4={t(
                      "Bunun için tek yapmanız gereken firmamızın web sayfasında yer alan telefon numaralarını aramak ve bizlerle irtibat kurmak olacaktır."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Renk Seçeneği")}
                  picture1="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/21.webp"
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
                  picture1="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/84.webp"
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
                      "Cam Balkonlarımızda 6 mm kalınlığında dış cam, 8 mm kalınlığında orta cam ve 10 mm kalınlığında iç cam kullanılmaktadır. Bu özel cam kalınlıkları, dayanıklılık ve estetik açıdan mükemmel bir denge sağlamak üzere tasarlanmıştır. Farklı kalınlık ve renklerde temperli cam seçeneği imkanı."
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
                  title1={t("Yağmur Suyu")}
                  picture1="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/3.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Yağmur Suyu")}
                  slogan={t("Cam Balkonlarınızda Yağmur Suyuna Son !")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Yağmur Suyu")}
                    desc1={t(
                      "Tüm sistemlerde kullanılabilen damlalık kasa profili ve sonradan montaj yapılabilen yağmur çıtası sayesinde cam balkonlarınıza yağmurun girmesine son verir."
                    )}
                  />
                </ul>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-store-features p-5">
                <ProductCarouselOne
                  title1={t("Küpeşte Aparatı")}
                  picture1="assets/images/cam-balkon/katlanir-cam-balkon-sistemi/kcs/24.webp"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details pt-5">
                <ProductCarouselTitleSlogan
                  title={t("Küpeşte Aparatı")}
                  slogan={t("Özel Aparat Üretimi!")}
                />

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ProductCarouselDescOne
                    title1={t("Küpeşte Aparatı")}
                    desc1={t(
                      "Özel Küpeşteli Cam birleşim yerlerinde ve maximum her 4 mt de kullanılmalıdır. İstenilen desende ve projeye uygun olarak özel aparat üretimi yapılır."
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

export default KupesteliCamBalkon;
