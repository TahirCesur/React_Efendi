import React from "react";

const ProductCarouselDescCam = (props) => {
  const { title1, desc1, title2, desc2, title3, desc3, title4, desc4 } = props;

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
      <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
        <li className="product-price m-0">
          <span className="sale-price">{title2}</span>
        </li>
      </ul>
      <li>
        <i className="fa fa-check mr-2" aria-hidden="true"></i>
        {desc2}
        <br />
      </li>
      <br />
      <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
        <li className="product-price m-0">
          <span className="sale-price">{title3}</span>
        </li>
      </ul>
      <li>
        <i className="fa fa-check mr-2" aria-hidden="true"></i>
        {desc3}
        <br />
      </li>
      <br />
      <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
        <li className="product-price m-0">
          <span className="sale-price">{title4}</span>
        </li>
      </ul>
      <li>
        <i className="fa fa-check mr-2" aria-hidden="true"></i>
        {desc4}
        <br />
      </li>
    </>
  );
};

export default ProductCarouselDescCam;
