import React from "react";
import Product from "../Components/product/Product";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";

function ProductPage() {
  return (
    <>
      <PageHeader title="ÜRÜNLERİMİZ" />
      <Spacer2 />
      <Product />
    </>
  );
}

export default ProductPage;
