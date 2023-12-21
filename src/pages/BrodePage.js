import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Brode from "../Components/product/Brode";
import ProductSimilar from "../Components/product/ProductSimilar";
// import Spacer2 from "../Components/common/Spacer2";

function BrodePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Brode Perde")} />
      <Brode />
      <ProductSimilar/>
    </>
  );
}

export default BrodePage;