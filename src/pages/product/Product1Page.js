import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Product1 from "../../Components/product/Product1";

function Product1Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Ürünlerimiz")} />
      <Product1/>
    </>
  );
}

export default Product1Page;
