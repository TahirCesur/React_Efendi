/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";
/* import Spacer from "../common/Spacer"; */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Contact() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  // eslint-disable-next-line no-unused-vars
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
      <div className="contact-us-content">
          <div className="container mt-5 mb-5">
            <div className="tabs-header clearfix">
              <div className="section-header">
                <h2>İletişim</h2>
                <p>
                  Soru, görüş, öneri ve istekleriniz için aşağıdaki bilgiler
                  aracılığıyla bize 7/24 ulaşabilirsiniz .
                </p>
              </div>
            </div>

            <div className="contact-info-block mk-4">
              <div className="row row-sp row-eq-height">
                <div
                  className="col-sp col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4 mb-lg-0"
                >
                  <div
                    className="contact-block d-flex flex-column justify-content-center text-center"
                  >
                    <i className="icon ti-location-pin" aria-hidden="true"></i>
                    <h4>Ofisimiz</h4>
                    <p className="mb-0">
                      Yeni Yalova Yolu Cad.<br />
                      Buttim İş Merkezi <br />D Blok Kat: 1 No: 246<br />
                      Osmangazi BURSA TÜRKİYE
                    </p>
                  </div>
                </div>
                <div
                  className="col-sp col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4 mb-lg-0"
                >
                  <div
                    className="contact-block d-flex flex-column justify-content-center text-center"
                  >
                    <i className="icon ti-alarm-clock" aria-hidden="true"></i>
                    <h4>Açılış Saatleri</h4>
                    <p className="mb-0">
                      <br />Pazartesi-Cumartesi : <br />09:00 - 18:00
                      <br />Pazar : Kapalı
                    </p>
                  </div>
                </div>
                <div
                  className="col-sp col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4 mb-sm-0"
                >
                  <div
                    className="contact-block d-flex flex-column justify-content-center text-center"
                  >
                    <i className="icon ti-email" aria-hidden="true"></i>
                    <h4>Email</h4>
                    <p className="mb-0">
                      <br />
                      <a href="mailto:info@efendioglutekstil.com"
                        >info@efendioglutekstil.com</a
                      >
                      <br /><br /><br />
                    </p>
                  </div>
                </div>
                <div className="col-sp col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div
                    className="contact-block d-flex flex-column justify-content-center text-center"
                  >
                    <i className="icon ti-mobile" aria-hidden="true"></i>
                    <h4>Bize Ulaşın</h4>
                    <p className="mb-0">
                      <br />
                      <a href="tel:+90(224)2115726">0 (224) 211 57 26</a>
                    </p>
                    <br /><br />
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form sections-spacing mk-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-title mb-5">
                    <h4>Bizimle İletişime Geçin!</h4>
                    <p>
                      Soru, görüş, öneri ve istekleriniz için aşağıdaki bilgiler
                      aracılığıyla bize 7/24 ulaşabilirsiniz .
                    </p>
                  </div>
                  <form
                    action="php/ajax_sendmail.php"
                    name="contactus"
                    method="post"
                    id="contact-form"
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label for="ContactName"></label>
                        <input  type="text"
                          id="ContactName"
                          name="name"
                          className="form-control" placeholder={t("Adınız")} />
                        <span className="error_msg" id="name_error"></span>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="ContactEmail"></label>
                        <input
                          type="email"
                          id="ContactEmail"
                          name="email"
                          className="form-control"
                          placeholder={t("Email")}
                        />
                        <span className="error_msg" id="email_error"></span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label for="ContactPhone"></label>
                        <input
                          type="tel"
                          className="form-control"
                          id="ContactPhone"
                          name="phone"
                          pattern="[0-9\-]*"
                          placeholder={t("Gsm")}
                        />
                        <div className="invalid-feedback">
                          Please enter your phone number.
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="ContactSubject"></label>
                        <input
                          type="text"
                          id="ContactSubject"
                          name="subject"
                          className="form-control"
                          placeholder={t("Konu")}
                        />
                        <span className="error_msg" id="subject_error"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="ContactMessage"></label>
                      <textarea
                        id="ContactMessage"
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder={t("Mesajınız")}
                      ></textarea>
                      <span className="error_msg" id="message_error"></span>
                    </div>
                    <div
                      className="form-group mailsendbtn button-action mt-1 mt-sm-3 clearfix"
                    >
                      <input
                        className="account-create btn btn-secondary justify-content-center align-items-center"
                        type="submit"
                        name="contactus"
                        value={t("Gönder")}
                      />
                      <div className="loading">
                        <img
                          className="img-fluid"
                          src="assets/images/ajax-loader.gif"
                          alt="loading"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">

                  <div className="responsive-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d12183.00188105148!2d29.067570000000003!3d40.23685!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDE0JzEyLjciTiAyOcKwMDQnMDMuMyJF!5e0!3m2!1str!2sus!4v1693959337995!5m2!1str!2sus"
                      width="100%"
                      height="520px"
                      style={{border: "0"}}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
    </>
  );
}

export default Contact;
