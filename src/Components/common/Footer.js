/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-top clearfix">
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 footer-logos">
                <div className="ftr-logo">
                  <a href="index.html">
                    <img
                      className="img-fluid"
                      src="assets/images/logo/sekir-trans.webp"
                      alt="Şekir Yapı"
                      title="Şekir Yapı"
                    />
                  </a>
                </div>

                <div className="social-icons align-items-center text-center justify-content-center">
                  <p className="d-flex flex-row align-items-center text-center justify-content-center text-white">
                    {t("Bizimle Tanışın, Farkı Hissedin!")}
                    <br />
                    {t("Şekir Yapı, Bursa ve çevresinde güvenilir,")} <br />
                    {t(
                      " kaliteli ve estetik yapı çözümleri sunan bir markadır."
                    )}{" "}
                    <br />
                    {t("Siz de projeleriniz için bize ulaşın,")} <br />
                    {t("hayallerinizi gerçeğe dönüştürmek için")} <br />
                    {t("birlikte çalışalım.")}
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-8 newsletter-menulinks align-items-center text-center justify-content-center">
                <div className="row no-gutters footer-links">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 contact ">
                    <h4>{t("Kurumsal")}</h4>
                    <hr />
                    <ul className="linklist contact-info d-flex flex-column mb-3">
                      <li>
                        <Link as={Link} to="/" onClick={handleClick}>
                          {t("Anasayfa")}
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/aboutus" onClick={handleClick}>
                          {t("Hakkımızda")}
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/product" onClick={handleClick}>
                          {t("Ürünlerimiz")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          as={Link}
                          to="/uygulamalarimiz"
                          onClick={handleClick}
                        >
                          {t("Uygulamalarımız")}
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/contact" onClick={handleClick}>
                          {t("İletişim")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 contact">
                    <h4>{t("Ürünlerimiz")}</h4>
                    <hr />
                    <ul className="linklist contact-info d-flex flex-column mb-3">
                      <li>
                        <Link as={Link} to="/pvc-pencere-kapi-sistemleri" onClick={handleClick}>
                          {t("PVC Kapı ve Pencere Sistemleri")}
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/cam-balkon" onClick={handleClick}>
                          {t("Cam Balkon Sistemleri")}
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/aluminyum" onClick={handleClick}>
                          {t("Alüminyum Korkuluk Küpeşte")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 contact">
                    <h4>{t("İletişim Bilgileri")}</h4>
                    <hr />
                    <ul className="linklist contact-info d-flex flex-column">
                      <li>
                        {/* <i className="icon ti-location-pin"></i> */}
                        <Link>
                          Yunuseli Mahallesi <br />
                          Yunus Emre Sokak <br />
                          No: 27/A Osmangazi
                          <br />
                          BURSA / TÜRKİYE
                        </Link>
                      </li>
                      <br />
                      <li>
                        {/* <i className="icon fa fa-phone"></i> */}
                        <a href="tel:+902242486147">+90 (224) 248 61 47</a>
                      </li>
                      <li>
                        {/* <i className="icon ti-email"></i> */}
                        <a href="mailto:info@sekiryapi.com">
                          info@sekiryapi.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom clearfix">
          <div className="container">
            <div className="copyright-content text-center">
              <span className="content text-center">
                Copyright &copy; 2024 Şekir Yapı <br />
                {t("Tüm hakları Saklıdır.")}
              </span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/905512209291"
        className="back-to-tops d-flex align-items-center justify-content-center"
        target="_blank"
        onClick={handleClick}
      >
        <i className="fa fa-whatsapp"></i>
      </a>

      <a
        href="#"
        className="back d-flex align-items-center justify-content-center active"
        id="scrollTop"
        alt="Up-down"
        aria-label="Up-down"
        onClick={handleClick}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}

export default Footer;
