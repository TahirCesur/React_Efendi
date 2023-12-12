import React from "react";
import { useTranslation } from "react-i18next";
import EndustriyelMutfakInoksanBulasikMakinesi from "../Components/product/EndustriyelMutfakInoksanBulasikMakinesi";
import ProductSimilarEndustriyelMutfak from "../Components/product/ProductSimilarEndustriyelMutfak";

function EndustriyelMutfakInoksanBulasikMakinesiPage() {
  const { t } = useTranslation();
  return (
    <>
      <EndustriyelMutfakInoksanBulasikMakinesi />
      <ProductSimilarEndustriyelMutfak />
    </>
  );
}

export default EndustriyelMutfakInoksanBulasikMakinesiPage;
