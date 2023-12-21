import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import ProductOne from "./ProductOne";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Product() {
  return (
    <>
      <SRLWrapper>
        <div className="bestseller-section bestseller-style-1 sections-spacing">
          <div className="container-fluid">
            <ProductOne />
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default Product;
