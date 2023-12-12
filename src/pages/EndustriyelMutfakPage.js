import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import EndustriyelMutfak from "../Components/product/EndustriyelMutfak";

function EndustriyelMutfakPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Endüstrİyel Mutfak")} />
      <Spacer2 />
      <EndustriyelMutfak />
    </>
  );
}

export default EndustriyelMutfakPage;
