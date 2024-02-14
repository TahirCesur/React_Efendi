import { t } from "i18next";
import React from "react";

const ProductCarouselDesc = (props) => {
  const { title1,desc1,title2,desc2,title3,desc3,title4,desc4,desc5,desc6,desc7,desc8,desc9,desc10,desc11,desc12} = props;

  return (
    <>
      <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">  
        <li className="product-price m-0">
          <span className="sale-price">{title1}</span>
        </li>
      </ul>
      <li>
        <i className="fa fa-check mr-2" aria-hidden="true"></i>
        {t(desc1)}
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
        {t(desc2)}
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
        {t(desc3)}
        <br />
      </li>
      <br />
      <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
        <li className="product-price m-0">
          <span className="sale-price">{t(title4)}</span>  
        </li>
      </ul>
      <li>
        <i className="fa fa-check mr-2" aria-hidden="true"></i>
        {desc4}<br />{desc5}<br />{desc6}<br />{desc7}<br />{desc8}<br />{desc9}<br />{desc10}<br />{desc11}<br />{desc12}
        <br />
      </li>
    </>
  );
};

export default ProductCarouselDesc;
