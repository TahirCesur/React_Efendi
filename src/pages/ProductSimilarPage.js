import React from "react";
import ProductSimilar from "../Components/product/ProductSimilar";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function ProductSimilarPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("BENZER ÜRÜNLER")}/>
      <Spacer2 />
      <ProductSimilar />
    </>
  );
}

export default ProductSimilarPage;
