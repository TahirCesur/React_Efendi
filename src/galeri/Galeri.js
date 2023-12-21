/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const Galeri = () => {
  return (
    <>
      <SRLWrapper>
        <div className="product-single mt-5">
          <div className="container">
            <div className="row">
              <div className="col-sp col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/products/armür-1.jpg"
                    alt="Armür"
                    title="Armür"
                  />
                </div>
                <div className="collection-details">
                  <a href="" className="collection-title text-center">
                    Armür
                  </a>
                </div>
              </div>
              <div className="col-sp col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/products/fon-1.jpg"
                    alt="Armür"
                    title="Armür"
                  />
                </div>
                <div className="collection-details">
                  <a href="" className="collection-title text-center">
                    Fonluk
                  </a>
                </div>
              </div>
              <div className="col-sp col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/products/brode-2.jpg"
                    alt="Armür"
                    title="Armür"
                  />
                </div>
                <div className="collection-details">
                  <a href="" className="collection-title text-center">
                    Brode
                  </a>
                </div>
              </div>
              <div className="col-sp col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/products/nakış-1.jpg"
                    alt="Armür"
                    title="Armür"
                  />
                </div>
                <div className="collection-details">
                  <a href="" className="collection-title text-center">
                    Nakış
                  </a>
                </div>
              </div>
              <div className="col-sp col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/products/örme-1.jpg"
                    alt="Armür"
                    title="Armür"
                  />
                </div>
                <div className="collection-details">
                  <a href="" className="collection-title text-center">
                    Örme
                  </a>
                </div>
              </div>
              <div className="col-sp col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/products/baski-4.jpg"
                    alt="Armür"
                    title="Armür"
                  />
                </div>
                <div className="collection-details">
                  <a href="" className="collection-title text-center">
                    Baskılı
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default Galeri;
