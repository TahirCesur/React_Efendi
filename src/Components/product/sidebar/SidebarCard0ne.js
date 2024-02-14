import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

const SidebarCardOne = (props) => {
    const { t } = useTranslation();
    const { picture, title, price, nav } = props;
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    const options = {
      settings: {
        overlayColor: "rgba(0, 0, 0, 0.9)",
        autoplaySpeed: 3000,
        transitionSpeed: 1000,
        disablePanzoom: false,
        closeButton: true, // Kapatma düğmesini göster
      },
      buttons: {
        showDownloadButton: false,
        showThumbnailsButton: false,
      },
    };
  return (
    <>
      <SRLWrapper options={options}>
        <div className="product__item">
          <div className="product__item__img">
            <img src={picture} alt={title} />
            <div className="product__item__btn">
            </div>
            <div className="product__item__content">
              <div className="product__item__ratings">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <h4 className="product__item__title">
                <Link as={Link} to={nav} onClick={scrollToTop}>
                  {t(title)}
                </Link>
              </h4>
              <Link
                as={Link}
                to={nav}
                className="nisoz-btn"
                onClick={scrollToTop}
              >
                <span className="nisoz-btn__shape"></span>
                <span className="nisoz-btn__shape"></span>
                <span className="nisoz-btn__shape"></span>
                <span className="nisoz-btn__shape"></span>
                <span className="nisoz-btn__text">{t(price)}</span>
              </Link>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default SidebarCardOne;
