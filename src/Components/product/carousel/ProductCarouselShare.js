/* eslint-disable jsx-a11y/anchor-is-valid */
import { t } from "i18next";
import React from "react";

const ProductCarouselShare = (props) => {
  const { title } = props;
  return (
    <>
      <ul className="d-flex flex-row">
        <li>
          <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
            <li className="product-price m-0">
              <span className="sale-price">{t("Arkadaşlarınla Paylaş :")}</span>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Facebook">
            <i className="ti-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <i className="ti-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Google Plus">
            <i className="ti-google"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Pinterest">
            <i className="ti-pinterest"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Email">
            <i className="ti-email"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default ProductCarouselShare;
