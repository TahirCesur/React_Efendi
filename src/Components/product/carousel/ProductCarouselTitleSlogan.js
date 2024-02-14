import { t } from "i18next";
import React from "react";

const ProductCarouselTitleSlogan = (props) => {
  const { title , slogan } = props;

  return (
    <>
      <div className="profuct-info">
        <h1 className="product-title">{title}</h1>
        <div className="pro-revi-arrow clearfix">
          <div className="product-starrating pull-left">
            {slogan}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCarouselTitleSlogan;
