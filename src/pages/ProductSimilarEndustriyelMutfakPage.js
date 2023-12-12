import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import ProductSimilarEndustriyelMutfak from "../Components/product/ProductSimilarEndustriyelMutfak";

function ProductSimilarEndustriyelMutfakPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("BENZER ÜRÜNLER")}/>
      <Spacer2 />
      <ProductSimilarEndustriyelMutfak />
    </>
  );
}

export default ProductSimilarEndustriyelMutfakPage;
