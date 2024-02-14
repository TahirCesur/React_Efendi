import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Product from "../../Components/product/Product";

function ProductPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Ürünlerimiz")} />
      <Product/>
    </>
  );
}

export default ProductPage;
