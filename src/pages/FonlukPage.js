import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Fonluk from "../Components/product/Fonluk";
import ProductSimilar from "../Components/product/ProductSimilar";
// import Spacer2 from "../Components/common/Spacer2";

function FonlukPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Fonluk")} />
      <Fonluk />
      <ProductSimilar/>
    </>
  );
}

export default FonlukPage;