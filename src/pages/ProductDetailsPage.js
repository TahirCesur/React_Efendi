import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import ProductDetails from "../Components/product/ProductDetails";
import ProductSimilar from "../Components/product/ProductSimilar";

function ProductDetailsPage() {
  return (
    <>
      <Spacer2 />
      <ProductDetails />
      <ProductSimilar />
    </>
  );
}

export default ProductDetailsPage;
