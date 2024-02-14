/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
/* import Spacer from "../common/Spacer"; */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Contact() {
  const pageDescription =
    "Şekir Yapı, Bursa ve çevresinde güvenilir, kaliteli ve estetik PVC Cam Balkon ve alüminyun üretim tesisi olarak sizlere çözümler sunan bir markadır.";
  const pageKeywords =
    "Bursa Cam Balkon, Winsa, Bursa PVC pencere ve kapı sistemleri, alüminyum korkuluk küpeşte, alüminyum doğrama vitrin, kış bahçesi, giyotin cam sistemleri, katlanır cam balkon sistemleri, sürmeli cam sistemleri, ısıcamlı cam sistemleri, İletişim, Bize ulaşın, bizimle iletişime geçin";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/contact";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

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
        "service_o5ivv7g",
        "template_acuxcep",
        e.target,
        "KOD1FeoL_kee7es0z"
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
      <Helmet>
        <title>
          {t("Şekir Yapı")}
        </title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <div className="contact-us-content">
        <div className="container mt-5 mb-5">
          <div className="tabs-header clearfix">
            <div className="section-header">
              <h2>{t("İletişim")}</h2>
              <p>
                {t(
                  "Soru, görüş, öneri ve istekleriniz için aşağıdaki bilgiler aracılığıyla bize 7/24 ulaşabilirsiniz."
                )}
              </p>
            </div>
          </div>

          <div className="contact-info-block mk-4">
            <div className="row row-sp row-eq-height">
              <div className="col-sp col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="contact-block d-flex flex-column justify-content-center text-center">
                  <i className="icon ti-location-pin" aria-hidden="true"></i>
                  <h4>{t("Ofisimiz")}</h4>
                  <p className="mb-0">
                    Yunuseli Mahallesi
                    <br />
                    Yunus Emre Sokak <br /> No: 27/A Osmangazi
                    <br />
                    BURSA / TÜRKİYE
                  </p>
                </div>
              </div>
              <div className="col-sp col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="contact-block d-flex flex-column justify-content-center text-center">
                  <i className="icon ti-alarm-clock" aria-hidden="true"></i>
                  <h4>{t("Açılış Saatleri")}</h4>
                  <p className="mb-0">
                    <br />
                    {t("Pazartesi-Cumartesi")} : <br />
                    09:00 - 18:00
                    <br />
                    {t("Pazar : Kapalı")}
                  </p>
                </div>
              </div>
              <div className="col-sp col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4 mb-sm-0">
                <div className="contact-block d-flex flex-column justify-content-center text-center">
                  <i className="icon ti-email" aria-hidden="true"></i>
                  <h4>E-Mail</h4>
                  <p className="mb-0">
                    <br />
                    <a href="mailto:info@sekiryapi.com" className="text-white">
                      info@sekiryapi.com
                    </a>
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-sp col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="contact-block d-flex flex-column justify-content-center text-center">
                  <i className="icon ti-mobile" aria-hidden="true"></i>
                  <h4>{t("Bize Ulaşın")}</h4>
                  <p className="mb-0">
                    Tel :&nbsp;
                    <a href="tel:+90(224)2486147" className="text-white">
                      0 (224) 248 61 47
                    </a>
                    <br />
                    Fax :&nbsp;
                    <a href="tel:+90(224)2486583" className="text-white">
                      0 (224) 248 65 83
                    </a>
                    <br />
                    Gsm :&nbsp;
                    <a href="tel:+90(551)2209291" className="text-white">
                      0 (551) 220 92 91
                    </a>
                    <br />
                    Whatsapp :&nbsp;
                    <a
                      href="https://wa.me/905512209291"
                      className="text-white"
                      target="_blank"
                    >
                      0 (551) 220 92 91
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form sections-spacing mk-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-title mb-5">
                  <h4>{t("Bizimle İletişime Geçin!")}</h4>
                  <p>
                    {t(
                      "Soru, görüş, öneri ve istekleriniz için aşağıdaki bilgiler aracılığıyla bize 7/24 ulaşabilirsiniz."
                    )}
                  </p>
                </div>
                <form
                  onSubmit={sendEmail}
                  name="contactus"
                  method="post"
                  id="contact-form"
                  className="contact-form"
                  noValidate="noValidate"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label for="ContactName"></label>
                      <input
                        type="text"
                        id="ContactName"
                        name="name"
                        className="form-control"
                        placeholder={t("Adınız")}
                      />
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
                        type="text"
                        className="form-control"
                        id="ContactPhone"
                        name="phone"
                        pattern="[0-9\-]*"
                        placeholder={t("Gsm")}
                      />
                      <div className="invalid-feedback"></div>
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
                  <div className="form-group mailsendbtn button-action mt-1 mt-sm-3 clearfix">
                    <input
                      className="account-create btn btn-secondary justify-content-center align-items-center"
                      type="submit"
                      name="contactus"
                      value={t("Gönder")}
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="responsive-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97509.18879506926!2d28.890045820227364!3d40.205455887386606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1508ea089607%3A0xb853554d69a4c312!2zxZ5la2lyIFlhcMSx!5e0!3m2!1str!2str!4v1705465337858!5m2!1str!2str"
                    width="100%"
                    height="520px"
                    style={{ border: "0" }}
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
