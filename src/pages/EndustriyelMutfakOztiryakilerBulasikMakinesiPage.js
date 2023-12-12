import React from "react";
import { useTranslation } from "react-i18next";
import EndustriyelMutfakOztiryakilerBulasikMakinesi from "../Components/product/EndustriyelMutfakOztiryakilerBulasikMakinesi";
import ProductSimilarEndustriyelMutfak from "../Components/product/ProductSimilarEndustriyelMutfak";

function EndustriyelMutfakOztiryakilerBulasikMakinesiPage() {
  const { t } = useTranslation();
  return (
    <>
      <EndustriyelMutfakOztiryakilerBulasikMakinesi />
      <ProductSimilarEndustriyelMutfak />
    </>
  );
}

export default EndustriyelMutfakOztiryakilerBulasikMakinesiPage;
