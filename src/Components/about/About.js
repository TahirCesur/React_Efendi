/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    // Dinamik olarak canonical URL belirleyebilirsiniz.
    // Örneğin, sayfanın içeriğine bağlı olarak bir URL oluşturabilirsiniz.
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/aboutus";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []); // [] içine bağlı olduğunuz bağımlılıkları ekleyebilirsiniz.

  const { t } = useTranslation();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  useEffect(() => {
    if (lightboxController.toggler) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightboxController.toggler]);

  const openVideo = () => {
    setLightboxController({
      toggler: !lightboxController.toggler,
    });
  };

  return (
    <>
      <Helmet>
        <title>{t("Hakkımızda")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <div className="aboutus-section sections-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-row align-items-center">
              <div className="aboutus-details">
                <div className="section-header">
                  <h2>{t("Hakkımızda")}</h2>
                  <p style={{ color: "#e44514" }}>
                    <strong style={{ color: "#e44514" }}>
                      {t(
                        "Gelecek nesillere bırakabileceğimiz en önemli miras varolan dünyamızın yaşanılabilir olmasıdır."
                      )}
                    </strong>
                  </p>
                  <br />
                  <p>
                    <strong style={{ color: "#e44514" }}>
                      {t("Hoş Geldiniz, Şekir Yapı!")}
                    </strong>
                    <br />
                    {t(
                      "Şekir Yapı, 30 yılı aşkın bir süredir Bursa'da faaliyet österen bir yapı sektör firmasıdır. Köklü geçmişimiz ve uzman ekibimizle, PVC pencere, alüminyum doğrama ve cam balkon sistemleri konusunda öncü bir firma olarak tanınmaktayız."
                    )}
                    <br />
                    {t(
                      "Şekir Yapı olarak bizler, 1990 yılından bu yana sektördeki varlığımızla, müşterilerimize güvenilir ve kaliteli hizmet sunmanın gururunu yaşıyoruz. Her bir projemizde, geçmişten günümüze taşıdığımız deneyim ve birikimle, müşteri memnuniyetini en üst düzeye çıkarmak için çaba harcıyoruz."
                    )}
                    <br />
                    <br />
                    <strong style={{ color: "#e44514" }}>
                      {t("Müşteri Memnuniyeti Odaklı Hizmet")}
                    </strong>
                    <br />
                    {t(
                      "Şekir Yapı ailesi olarak en büyük değerimiz müşteri memnuniyetidir. Her bir projemizde müşterilerimizin beklentilerini aşmak, kalite standartlarımızı yükseltmek ve güvenilirliğimizi perçinlemek adına çaba gösteriyoruz."
                    )}
                    <br />
                    <strong style={{ color: "#e44514" }}>
                      {t("Bizimle Tanışın, Farkı Hissedin!")}
                    </strong>
                    <br />
                    {t(
                      "Şekir Yapı, Bursa ve çevresinde güvenilir, kaliteli ve estetik yapı çözümleri sunan bir markadır. Siz de projeleriniz için bize ulaşın, hayallerinizi gerçeğe dönüştürmek için birlikte çalışalım."
                    )}
                    <br />
                    <br />
                    <strong style={{ color: "#e44514" }}>
                      {t("Teşekkür ederiz...")}
                      <br />
                      {t("Şekir Yapı Ailesi")}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-row align-items-center">
              <div className="aboutus-video">
                <div
                  id="play-youtube-video"
                  className="position-relative d-block zoom-hover-effect"
                  onClick={openVideo}
                >
                  <img
                    className="img-fluid blur-up lazyload w-100"
                    src="assets/images/hakkimizda/hakkimizda.webp"
                    data-src="assets/images/hakkimizda/hakkimizda.webp"
                    alt="hakkimizda"
                    title="hakkimizda"
                  />
                  <Link to="" className="vid-icon open-video-popup">
                    <img
                      className="img-fluid opacity1"
                      src="assets/images/icons/video-icon.webp"
                      alt="video"
                      title="İzleyin"
                    />
                  </Link>
                </div>
                <FsLightbox
                  toggler={lightboxController.toggler}
                  slide={lightboxController.slide}
                  sources={["https://www.youtube.com/watch?v=sdiLYdjlACE"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
