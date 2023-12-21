/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FsLightbox from 'fslightbox-react';
import { Link } from 'react-router-dom';


const Aboutus = () => {
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [lightboxController.toggler]);

  const openVideo = () => {
    setLightboxController({
      toggler: !lightboxController.toggler,
    });
  };

  return (
    <div className="aboutus-section sections-spacing">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-row align-items-center">
            <div className="aboutus-details">
              <div className="section-header">
                <h2>Hakkımızda</h2>
                <p style={{ color: "#bfa87b" }}>
                  <strong style={{ color: "#bfa87b" }}>
                    "Gelecek nesillere bırakabileceğimiz en önemli miras varolan
                    dünyamızın yaşanılabilir olmasıdır."
                  </strong>
                </p>
                <br />
                <p>
                  <strong style={{ color: "#bfa87b" }}>
                    Efendioğlu Tekstil
                  </strong>
                  , BUTTİM (Bursa Uluslararası Tekstil Ticaret Merkezi)’deki
                  showroom’unda siz değerli müşterileri için en kaliteli
                  ürünleri sunmaya devam ediyor.
                  <br />
                  Sektöründe 18 yılı aşkın bir bilgi birikimine ve deneyimine
                  sahip firmamız Türkiye’nin tüm il ve ilçelerine ürünleri
                  ulaştırmaktadır.
                  <br />
                  <strong style={{ color: "#bfa87b" }}>
                    Efendioğlu Tekstil
                  </strong>
                  ’in üretimini ve pazarlamasını gerçekleştirdiği ürünler
                  başlıca şöyledir: <br />
                  Şönil goblenler, Simli goblenler, Starlight goblenler, Tütün
                  goblenler, Yarım organze pullu perdeler, Yarım organze pullu
                  tergal perdeler vb.
                  <br />
                  <strong style={{ color: "#bfa87b" }}>
                    Efendioğlu Tekstil
                  </strong>
                  , kumaş üretirken kullandığı hammadeleri yüksek kalitede seçer
                  ve alanında tanınmış firmalardan tedarik eder.
                  <br />
                  Aksamayan bir iş akışına ve disiplinli bir çalışma sistemi
                  sahip firmamız, satışa sunduğu kumaşları hassas kalite
                  politikalarından geçirerek pazarlama sürecine sokulur ve
                  yurdumuzun dört bir yanındaki müşterilerine ulaştırılır.
                  <br />
                  Müşterilerine en iyi hizmeti ve ürünleri sunmayı amaçlayan{" "}
                  <strong style={{ color: "#bfa87b" }}>
                    Efendioğlu Tekstil
                  </strong>{" "}
                  ürünleri ve firması hakkında merak ettiğiniz her konuda size
                  bir telefon kadar yakın..
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
                  src="assets/images/slider/hakkimizda.jpg"
                  data-src="assets/images/slider/hakkimizda.jpg"
                  alt="image"
                  title="image"
                />
                <Link to="" className="vid-icon open-video-popup">
                  <img
                    className="img-fluid opacity1"
                    src="assets/images/icons/video-icon.png"
                    alt="image"
                    title="Click Me"
                  />
                </Link>
              </div>
              <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={['https://www.youtube.com/watch?v=sdiLYdjlACE']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
