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
      <section className="cta-two">
        <div className="container">
          <div
            className="cta-two__info-top wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div
              className="cta-two__bg"
              style={{
                backgroundImage: "url(assets/images/shapes/cta-bg-2.webp)",
              }}
            ></div>
            <div className="section-title">
              <h2 className="section-title__title">
                {t("İLETİŞİM")}
                <br />
                <br />
                <h3>{t("BİZİMLE İRTİBATA GEÇİN!")}</h3>
              </h2>
            </div>
            <Link
              as={Link}
              to="/contactus"
              className="cta-two__icon"
              alt="contact-arrow"
              aria-label="contact-arrow"
              onClick={handleClick}
            >
              <span className="icon-long-arrow"></span>
            </Link>
          </div>
          <h5
            className="cta-two__info-bottom wow fadeInDown"
            data-wow-delay="300ms"
          >
            {t("ÜCRETSİZ FİYAT TEKLİFİ İÇİN BİZİ ARAYIN")}: &nbsp;
            <a href="tel:+02242116266">(0224) 211 62 66</a>
          </h5>
        </div>
      </section>
      <section className="google-map mt-60">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.613662760092!2d28.94080427498341!3d40.19541046908147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f8db7372071%3A0x8d63b3d54341898!2sYenid%C3%BCnya%20End%C3%BCstriyel%20Tedarik!5e0!3m2!1str!2str!4v1698355162562!5m2!1str!2str"
          className="google-map__one"
          allowFullScreen=""
          title="Google Harita"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
