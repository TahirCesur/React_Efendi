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
        "service_kol10j6",
        "template_3dj27vj",
        e.target,
        "NzLGFAgtvciJq5EXd"
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
                backgroundImage: "url(assets/images/shapes/cta-bg-2.png)",
              }}
            ></div>
            <div className="section-title">
              <h2 className="section-title__title">
                İLETİŞİM
                <br />
                <br />
                <h3>BİZİMLE İRTİBATA GEÇİN!</h3>
              </h2>
            </div>
            <Link
              as={Link}
              to="/contactus"
              className="cta-two__icon"
              onClick={handleClick}
            >
              <span className="icon-long-arrow"></span>
            </Link>
          </div>
          <h5
            className="cta-two__info-bottom wow fadeInDown"
            data-wow-delay="300ms"
          >
            ÜCRETSİZ FİYAT TEKLİFİ İÇİN BİZİ ARAYIN:
            <a href="tel:+02242116266">(0224) 211 62 66</a>
          </h5>
        </div>
      </section>
      <section className="google-map mt-60">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.7328526602423!2d29.063398875206037!3d40.23724166654529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3fc6d917271f%3A0xe62f33c9c9df812e!2sButtim%20Bursa%20Uluslararas%C4%B1%20Tekstil%20Ticaret%20Merkezi!5e0!3m2!1str!2str!4v1691322197916!5m2!1str!2str"
          className="google-map__one"
          allowFullScreen=""
          title="Google Harita"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
