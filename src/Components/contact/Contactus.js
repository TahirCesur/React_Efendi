/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Contactus() {
  const { t } = useTranslation();

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
      <section className="contact-one contact-page">
        <div className="container wow fadeInUp" data-wow-delay="300ms">
          <div className="section-title text-center">
            <div className="section-title__triangle">
              <span
                className="fas fa-sun fa-2x"
                style={{ color: "#f9d21c" }}
              ></span>
            </div>
            <h5 className="section-title__tagline">BİZİMLE İLETİŞİM GEÇİN</h5>
            <h2 className="section-title__title">İLETİŞİM</h2>
          </div>

          <div className="container-md">
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
                          "url(assets/images/shapes/service-1-hover-shape.png)",
                      }}
                    ></div>
                    <div className="clearfix"></div>
                    <div className="service-one__item__icon">
                      <span className="icon-phone-call-1"></span>
                    </div>
                    <h3 className="service-one__item__title text-white">GSM</h3>
                    <p className="service-one__item__title1 text-white">
                      0224 211 62 66
                      <br />
                      <br />
                      0543 407 93 23
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
                          "url(assets/images/shapes/service-1-hover-shape.png)",
                      }}
                    ></div>
                    <div className="clearfix"></div>
                    <div className="service-one__item__icon">
                      <span className="icon-mailbox"></span>
                    </div>
                    <h3 className="service-one__item__title text-white">
                      EMAİL
                    </h3>
                    <p className="service-one__item__title1 text-white">
                      info@bkbsolarlight.com
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
                          "url(assets/images/shapes/service-1-hover-shape.png)",
                      }}
                    ></div>
                    <div className="clearfix"></div>
                    <div className="service-one__item__icon">
                      <span className="icon-maps-and-flags"></span>
                    </div>
                    <h3 className="service-one__item__title text-white">
                      ADRESİMİZ
                    </h3>
                    <p className="service-one__item__title1 text-white">
                      Altınova Mh. Fuar Cd. Buttim İş Merkezi A Blok 4.Kat
                      No:4033
                      <br />
                      Osmangazi / BURSA
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
                    <input type="text" placeholder="Adınız" name="name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-one__input-box">
                    <input type="email" placeholder="Email" name="email" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-one__input-box">
                    <input type="text" placeholder="Gsm" name="phone" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-one__input-box">
                    <input type="text" placeholder="Konu" name="subject" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="contact-one__input-box text-message-box">
                    <textarea name="message" placeholder="Mesajınız"></textarea>
                  </div>
                  <div className="contact-one__btn-box">
                    <button type="submit" className="nisoz-btn">
                      <span className="nisoz-btn__shape"></span>
                      <span className="nisoz-btn__shape"></span>
                      <span className="nisoz-btn__shape"></span>
                      <span className="nisoz-btn__shape"></span>
                      <span className="nisoz-btn__text">Gönder</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="container-md mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.7328526602423!2d29.063398875206037!3d40.23724166654529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3fc6d917271f%3A0xe62f33c9c9df812e!2sButtim%20Bursa%20Uluslararas%C4%B1%20Tekstil%20Ticaret%20Merkezi!5e0!3m2!1str!2str!4v1691322197916!5m2!1str!2str"
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
