import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import ProductSimilarAmbalaj from "../Components/product/ProductSimilarAmbalaj";
import { useTranslation } from "react-i18next";

function ProductSimilarAmbalajPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("BENZER ÜRÜNLERİMİZ")}/>
      <Spacer2 />
      <ProductSimilarAmbalaj />
    </>
  );
}

export default ProductSimilarAmbalajPage;
