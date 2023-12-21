import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Urun from "../Components/product/Urun";
import ProductSimilar from "../Components/product/ProductSimilar";
// import Spacer2 from "../Components/common/Spacer2";

function UrunPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Ürün")} />
      <Urun />
      <ProductSimilar/>
    </>
  );
}

export default UrunPage;