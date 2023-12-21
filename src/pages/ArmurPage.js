import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Armur from "../Components/product/Armur";
import ProductSimilar from "../Components/product/ProductSimilar";
// import Spacer2 from "../Components/common/Spacer2";

function ArmurPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Armür Perde")} />
      <Armur />
      <ProductSimilar/>
    </>
  );
}

export default ArmurPage;