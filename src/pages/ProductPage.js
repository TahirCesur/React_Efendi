import React from "react";
import Product from "../Components/product/Product";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function ProductPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("ÜRÜNLERİMİZ")} />
      <Product />
    </>
  );
}

export default ProductPage;
