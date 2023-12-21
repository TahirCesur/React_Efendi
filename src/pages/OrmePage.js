import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Orme from "../Components/product/Orme";
import ProductSimilar from "../Components/product/ProductSimilar";
// import Spacer2 from "../Components/common/Spacer2";

function OrmePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Örme Perde")} />
      <Orme />
      <ProductSimilar/>
    </>
  );
}

export default OrmePage;