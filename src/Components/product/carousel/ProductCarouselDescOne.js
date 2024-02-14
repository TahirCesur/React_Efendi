import { t } from "i18next";
import React from "react";

const ProductCarouselDescOne = (props) => {
  const { title1,desc1} = props;

  return (
    <>
      <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
        <li className="product-price m-0">
          <span className="sale-price">{title1}</span>
        </li>
      </ul>
      <li>
        <i className="fa fa-check mr-2" aria-hidden="true"></i>
        {desc1}
        <br />
      </li>
      <br />
    
    </>
  );
};

export default ProductCarouselDescOne;
