import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import ProductSimilarEndustriyelKagit from "../Components/product/ProductSimilarEndustriyelKagit";
import { useTranslation } from "react-i18next";

function ProductSimilarEndustriyelKagitPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("BENZER ÜRÜNLER")}/>
      <Spacer2 />
      <ProductSimilarEndustriyelKagit />
    </>
  );
}

export default ProductSimilarEndustriyelKagitPage;
