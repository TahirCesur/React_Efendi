import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ProductOne(props) {
  const { t } = useTranslation();
  const { picture, title, price } = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="product__item">
        <div className="product__item__img">
          <img src={picture} alt={title} />
          <div className="product__item__btn">
            <Link as={Link} to={picture} className="img-popup" onClick={scrollToTop}>
              <i className="fas fa-eye"></i>
            </Link>
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
            <Link as={Link} to="product-details.html" onClick={scrollToTop}>{title}</Link>
            </h4>
            <Link as={Link} to="product-details.html" className="nisoz-btn" onClick={scrollToTop}>
              <span className="nisoz-btn__shape"></span>
              <span className="nisoz-btn__shape"></span>
              <span className="nisoz-btn__shape"></span>
              <span className="nisoz-btn__shape"></span>
              <span className="nisoz-btn__text">{price}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductOne;
