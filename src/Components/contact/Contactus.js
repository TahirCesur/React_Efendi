/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
// Contactus.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Contactus() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzhem5v",
        "template_q6tt0ps",
        e.target,
        "vHITrMwYs-OEE439x"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("Email başarıyla gönderildi!"));
        },
        (error) => {
          console.log(error.text);
          alert(t("Email gönderilirken bir hata oluştu!"));
        }
      );
    e.target.reset();
  }

  return (
    <>
      <section className="contact-one contact-page">
        <div className="container wow fadeInUp" data-wow-delay="300ms">
          <div className="section-title text-center">
            <div className="section-title__triangle">
              <img src="assets/images/favicons/icon.ico" alt="icon" aria-label="icon" />
            </div>
            <h5 className="section-title__tagline">
              {t("BİZİMLE İLETİŞİME GEÇİN")}
            </h5>
            <h2 className="section-title__title">{t("İLETİŞİM")}</h2>
          </div>

          <div className="container-md">
            <div className="row mt-5">{/* İletişim bilgileri kartları */}</div>
            <div className="row mt-5">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="service-one__item">
                  <div className="service-one__item__wrapper">
                    <div
                      className="service-one__item__hover"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/service-1-hover-shape.webp)",
                      }}
                    ></div>
                    <div className="clearfix"></div>
                    <div className="service-one__item__icon">
                      <span className="icon-phone-call-1"></span>
                    </div>
                    <h3 className="service-one__item__title text-white">
                      {t("GSM")}
                    </h3>
                    <p className="service-one__item__title1 text-white">
                      0224 223 4234
                      <br />
                      <br />
                      0546 534 1963
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="service-one__item">
                  <div className="service-one__item__wrapper">
                    <div
                      className="service-one__item__hover"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/service-1-hover-shape.webp)",
                      }}
                    ></div>
                    <div className="clearfix"></div>
                    <div className="service-one__item__icon">
                      <span className="icon-mailbox"></span>
                    </div>
                    <h3 className="service-one__item__title text-white">
                      {t("E-MAİL")}
                    </h3>
                    <p className="service-one__item__title1 text-white">
                      info@yenidunyaendustriyel.com
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="service-one__item">
                  <div className="service-one__item__wrapper">
                    <div
                      className="service-one__item__hover"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/service-1-hover-shape.webp)",
                      }}
                    ></div>
                    <div className="clearfix"></div>
                    <div className="service-one__item__icon">
                      <span className="icon-maps-and-flags"></span>
                    </div>
                    <h3 className="service-one__item__title text-white">
                      {t("ADRESİMİZ")}
                    </h3>
                    <p className="service-one__item__title1 text-white">
                      Üçevler Mahallesi Denizciler Caddesi 96B / B, 16130
                      <br />
                      Nilüfer / BURSA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-one__form-box container-md mt-40">
            <form
              onSubmit={sendEmail}
              className="contact-one__form contact-form-validated"
              noValidate="noValidate"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-one__input-box">
                    <input type="text" placeholder={t("Adınız")} name="name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-one__input-box">
                    <input type="email" placeholder={t("Email")} name="email" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-one__input-box">
                    <input type="text" placeholder={t("Gsm")} name="phone" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-one__input-box">
                    <input type="text" placeholder={t("Konu")} name="subject" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="contact-one__input-box text-message-box">
                    <textarea
                      name="message"
                      placeholder={t("Mesajınız")}
                    ></textarea>
                  </div>
                  <div className="contact-one__btn-box">
                    <button type="submit" className="nisoz-btn">
                      <span className="nisoz-btn__shape"></span>
                      <span className="nisoz-btn__shape"></span>
                      <span className="nisoz-btn__shape"></span>
                      <span className="nisoz-btn__shape"></span>
                      <span className="nisoz-btn__text">{t("Gönder")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="container-md mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.613662760092!2d28.94080427498341!3d40.19541046908147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f8db7372071%3A0x8d63b3d54341898!2sYenid%C3%BCnya%20End%C3%BCstriyel%20Tedarik!5e0!3m2!1str!2str!4v1698355162562!5m2!1str!2str"
              className="google-map__one"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
