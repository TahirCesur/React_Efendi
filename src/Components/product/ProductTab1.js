/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

function ProductTab1() {
  const { t } = useTranslation();

  // JSON dosyasını require ile dahil et
  const products = require("../../data/producttab1.json");

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
        <div id="tab1" className="drawertab-content">
          <div className="row row-sp row-eq-height prcarousel">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
              >
                <div className="product-item">
                  <div className="product-image-action">
                    <div className="product-image">
                      <a
                        href={product.picture}
                        data-lightbox="product-images"
                      >
                        <img
                          className="img-fluid blur-up lazyload"
                          src={product.picture}
                          data-src={product.picture}
                          alt="image"
                          title="image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3 className="product-title">
                      <a href={`/${product.title.toLowerCase()}`}>
                        {product.title}
                      </a>
                    </h3>
                    <h4 className="product-vendor"></h4>
                    <div className="product-starrating">
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                    </div>
                    <div className="product-price">
                      <span className="sale-price">{product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default ProductTab1;
