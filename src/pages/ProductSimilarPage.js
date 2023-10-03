import React from "react";
import ProductSimilar from "../Components/product/ProductSimilar";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";

function ProductSimilarPage() {
  return (
    <>
      <PageHeader title="Benzer ÜRÜNLERİMİZ"/>
      <Spacer2 />
      <ProductSimilar />
    </>
  );
}

export default ProductSimilarPage;
