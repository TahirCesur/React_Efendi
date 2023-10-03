/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Aboutus() {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <section
        className="about-one"
        style={{
          backgroundImage: "url(assets/images/shapes/about-1-bg-1.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-four__thumb">
                <div
                  className="about-four__thumb__item wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <img src="assets/images/Hakkımızda.jpg" alt="nisoz" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                {/* about content start*/}
                <div className="section-title">
                  <div className="section-title__triangle">
                    <span
                      className="fas fa-sun fa-2x"
                      style={{ color: "#f9d21c" }}
                    ></span>
                  </div>
                  <h5 className="section-title__tagline">
                    BKB GÜNEŞ SİSTEMLERİ
                  </h5>
                  <h2 className="section-title__title">HAKKIMIZDA</h2>
                </div>
                {/* section-title */}
                <p className="about-one__content__text">
                  BKB Güneş Enerjisi Sistemleri 2022 yılında kaliteyi çözüm
                  ortaklarımız ile buluşturmak misyonu ile faaliyetlerine
                  başlamıştır. BKB Güneş Enerjisi Sistemleri olarak günümüz
                  koşullarına uygun, yenilikçi, çevre dostu tasarımları, iş
                  ortaklarımızın beklentisine uygun şekilde onlarla buluşturma
                  hedefi ile hareket ediyoruz. BKB Güneş Enerjisi Sistemleri
                  başta Tekstil Güneş Enerjisi Sistemleri, gıda Güneş Enerjisi
                  Sistemleri, kare tabanlı torba, doypack torba, yan körüklü
                  torba ve kağıt Güneş Enerjisi Sistemleri olmak üzere iş
                  ortaklarımızın ihtiyaçlarına uygun ürünleri çeyrek asra yakın
                  tecrübemiz ile tasarlıyor, üretiyor ve iş ortaklarımız ile
                  buluşturuyoruz.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-one__box">
                      <div className="about-one__box__top">
                        <h4 className="about-one__box__title">
                          ÜCRETSİZ DANIŞMANLIK ALIN
                        </h4>
                        <div className="about-one__box__icon">
                          <span className="icon-customer-support"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-one__box">
                      <div className="about-one__box__top">
                        <h4 className="about-one__box__title">
                          YÜKSEK KALİTELİ PROJELER
                        </h4>
                        <div className="about-one__box__icon">
                          <span className="icon-good-quality"></span>
                        </div>
                      </div>
                      <p className="about-one__box__text"></p>
                    </div>
                  </div>
                </div>
                <div className="about-one__progress">
                  <h4 className="about-one__progress--title"></h4>
                  {/* <div className="about-one__progress--bar">
                  <div className="about-one__progress--inner count-bar" data-percent="77%">
                    <div className="about-one__progress--number count-text">
                      77%
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
              {/* about content end*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
