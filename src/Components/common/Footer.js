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
                      src="assets/images/logo/prusa-logo.png"
                      alt="Prusa Logo"
                      title="Prusa Logo"
                    />
                  </a>
                </div>

                <div className="social-icons align-items-center text-center justify-content-center">
                  <ul className="d-flex flex-row align-items-center text-center justify-content-center">
                    <li>
                      <a href="#" title="Facebook">
                        <i className="icon ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Twitter">
                        <i className="icon ti-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Instagram">
                        <i className="icon ti-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Google Plus">
                        <i className="icon ti-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Youtube">
                        <i className="icon ti-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-8 newsletter-menulinks align-items-center text-center justify-content-center">
                <div className="row no-gutters footer-links">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 contact ">
                    <h4>Kurumsal</h4>
                    <ul className="linklist contact-info d-flex flex-column mb-3">
                      <li>
                        <Link as={Link} to="/" onClick={handleClick}>
                          Anasayfa
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Aboutus" onClick={handleClick}>
                          Hakkımızda
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Product" onClick={handleClick}>
                          Ürünlerimiz
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Galeri" onClick={handleClick}>
                          Galeri
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Contact" onClick={handleClick}>
                          iletişim
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 contact">
                    <h4>ürünlerimiz</h4>
                    <ul className="linklist contact-info d-flex flex-column mb-3">
                      <li>
                        <Link as={Link} to="/Armur" onClick={handleClick}>
                          Armür Perde
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Fonluk" onClick={handleClick}>
                          Fonluk
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Brode" onClick={handleClick}>
                          Brode Perde
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Nakis" onClick={handleClick}>
                          Nakış Perde
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Orme" onClick={handleClick}>
                          Örme Perde
                        </Link>
                      </li>
                      <li>
                        <Link as={Link} to="/Baskili" onClick={handleClick}>
                          Baskılı Ürünler
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 contact">
                    <h4>İletişim Bilgileri</h4>
                    <ul className="linklist contact-info d-flex flex-column">
                      <li>
                        {/* <i className="icon ti-location-pin"></i> */}
                        <Link >
                          Yeni Yalova Yolu Cad. <br />
                          Buttim İş Merkezi <br />
                          D Blok Kat: 1 No: 246 <br />
                          Osmangazi BURSA / TÜRKİYE
                        </Link>
                      </li>
                      <br />
                      <li>
                        {/* <i className="icon fa fa-phone"></i> */}
                        <a href="tel:+902242115726">+90 (224) 211 57 26</a>
                      </li>
                      <li>
                        {/* <i className="icon ti-email"></i> */}
                        <a href="mailto:info@efendioglutekstil.com">
                          info@efendioglutekstil.com
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
                Copyright &copy; 2023 Efendioğlu Tekstil <br />
                Tüm hakları Saklıdır.
              </span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/905558187775"
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
