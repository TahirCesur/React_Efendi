import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Baskili from "../Components/product/Baskili";
import ProductSimilar from "../Components/product/ProductSimilar";
// import Spacer2 from "../Components/common/Spacer2";

function BaskiliPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Baskılı Ürünler")} />
      <Baskili />
      <ProductSimilar/>
    </>
  );
}

export default BaskiliPage;