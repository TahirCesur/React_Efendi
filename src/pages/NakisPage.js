import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Nakis from "../Components/product/Nakis";
import ProductSimilar from "../Components/product/ProductSimilar";
// import Spacer2 from "../Components/common/Spacer2";

function NakisPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Nakış Perde")} />
      <Nakis />
      <ProductSimilar/>
    </>
  );
}

export default NakisPage;