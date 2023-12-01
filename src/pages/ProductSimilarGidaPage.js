import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import ProductSimilarGida from "../Components/product/ProductSimilarKozmetik";
import { useTranslation } from "react-i18next";

function ProductSimilarGidaPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("BENZER ÜRÜNLER")}/>
      <Spacer2 />
      <ProductSimilarGida />
    </>
  );
}

export default ProductSimilarGidaPage;
