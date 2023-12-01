/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

function ProductFour(props) {
  const { t } = useTranslation();
  const {
    home,
    category,
    picture,
    title,
    mini,
    desctitle1,
    desctitle2,
    desctitle3,
    desctitle4,
    desctitle5,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    share,
  } = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SRLWrapper>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-xl-6 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="product-details__img">
                <img
                  src="assets/images/ambalaj/aluminyum-folyo-30-100.jpg"
                  alt={t(title)}
                />
                <div className="product-details__img-search">
                  <a className="img-popup" href={picture}></a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-6 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="product-details__content">
                <div className="product-details__top">
                  <h3 className="product-details__title">
                    {t(title)}
                    <span className="product-details__price">{t(mini)}</span>
                  </h3>
                </div>
                <div className="product-details__review">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="product-details__divider"></div>
                <div className="product-details__excerpt">
                  <p className="list-unstyled product-details__description__lists">
                    <ul className="list-unstyled product-details__description__lists">
                      <li>
                        <span className="icon-right-arrow"></span>
                        {t(desctitle1)}
                      </li>
                      {t(desc1)}
                      <li>
                        <span className="icon-right-arrow"></span>
                        {t(desctitle2)}
                      </li>
                      {t(desc2)}
                      <li>
                        <span className="icon-right-arrow"></span>
                        {t(desctitle3)}
                      </li>
                      {t(desc3)}
                      <li>
                        <span className="icon-right-arrow"></span>
                        {t(desctitle4)}
                      </li>
                      {t(desc4)}
                      <li>
                        <span className="icon-right-arrow"></span>
                        {t(desctitle5)}
                      </li>
                      {t(desc5)}
                    </ul>
                  </p>
                </div>

                <div className="product-details__socials">
                  <h4 className="product-details__socials__title">
                    {t(share)}
                  </h4>
                  <a href="https://twitter.com/X">
                    <span className="fab fa-twitter"></span>
                  </a>
                  <a href="https://www.facebook.com/">
                    <span className="fab fa-facebook"></span>
                  </a>
                  <a href="https://www.pinterest.com/">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                  <a href="https://www.instagram.com/">
                    <span className="fab fa-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default ProductFour;
