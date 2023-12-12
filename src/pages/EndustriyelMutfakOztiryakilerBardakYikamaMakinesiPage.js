import React from "react";
import { useTranslation } from "react-i18next";
import EndustriyelMutfakOztiryakilerBardakYikamaMakinesi from "../Components/product/EndustriyelMutfakOztiryakilerBardakYikamaMakinesi";
import ProductSimilarEndustriyelMutfak from "../Components/product/ProductSimilarEndustriyelMutfak";

function EndustriyelMutfakOztiryakilerBardakYikamaMakinesiPage() {
  const { t } = useTranslation();
  return (
    <>
      <EndustriyelMutfakOztiryakilerBardakYikamaMakinesi />
      <ProductSimilarEndustriyelMutfak />
    </>
  );
}

export default EndustriyelMutfakOztiryakilerBardakYikamaMakinesiPage;
