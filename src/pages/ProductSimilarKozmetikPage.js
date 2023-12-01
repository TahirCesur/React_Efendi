import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import ProductSimilarKozmetik from "../Components/product/ProductSimilarKozmetik";
import { useTranslation } from "react-i18next";

function ProductSimilarKozmetikPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("BENZER ÜRÜNLER")}/>
      <Spacer2 />
      <ProductSimilarKozmetik />
    </>
  );
}

export default ProductSimilarKozmetikPage;
