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
      <footer className="main-footer mt-40">
        <div
          className="main-footer__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/footer-bg-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="main-footer__top wow fadeInUp" data-wow-delay="100ms">
            <Link as={Link} to="/" className="main-footer__logo">
              <img
                src="assets/images/favicons/250x150 beyaz.png"
                alt="nisoz"
                width="126"
                height="84"
              />
            </Link>
            <div className="main-footer__social">
              <Link as={Link} to="https://www.facebook.com/">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link as={Link} to="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                as={Link}
                to="https://wa.me/905434079323"
                className="fab fa-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              ></Link>
            </div>
          </div>
          <div className="row foot">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="main-footer__navmenu">
                <h3 className="text-white">Kurumsal</h3>
                <ul>
                  <li>
                    <Link as={Link} to="/" onClick={handleClick}>
                      Anasayfa
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/aboutus" onClick={handleClick}>
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/product" onClick={handleClick}>
                      Ürünlerimiz
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/question" onClick={handleClick}>
                      Sıkça Sorulan Sorular
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/contactus" onClick={handleClick}>
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-footer__navmenu">
                <h3 className="text-white">Ürünlerimiz</h3>
                <ul>
                  <li>
                    <Link as={Link} to="" onClick={handleClick}>
                      Güvenlik
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="" onClick={handleClick}>
                      Ev ve Bahçe
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="" onClick={handleClick}>
                      Reklam Işıkları
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="" onClick={handleClick}>
                      Kırsal Alan
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="" onClick={handleClick}>
                      Özel Alan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="main-footer__about">
                <h3 className="text-white">İletişim</h3>
                <p className="main-footer__about__text">
                  Altınova Mh. Fuar Cd. <br />
                  Buttim İş Merkezi <br />A Blok 4.Kat No:4033
                  <br />
                  Osmangazi / BURSA
                </p>
                <ul className="main-footer__about__info">
                  <li>
                    <span className="fas fa-phone-square"></span>
                    <a href="tel:+2242116266">(0224) 211 6266</a>
                  </li>
                  <li>
                    <span className="fas fa-envelope"></span>
                    <a href="mailto:info@bkbsolarlight.com">
                      info@bkbsolarlight.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="copyright text-center">
        <div className="container wow fadeInUp" data-wow-delay="500ms">
          <p className="copyright__text">
            <Link as={Link} to="/">
              BKB Güneş Sistemleri © <span className="dynamic-year"></span>
            </Link>
            <br />
            Tüm Hakları Saklıdır
          </p>
        </div>
      </section>
      
      <a
        href="#"
        className="back d-flex align-items-center justify-content-center active"
      >
        <i className="fas fa-arrow-up"></i>
        <svg
          className="whatsapp-button__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </a>

      <a
        href="https://wa.me/905434079323"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
        <svg
          className="whatsapp-button__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </a>
    </>
  );
}

export default Footer;
