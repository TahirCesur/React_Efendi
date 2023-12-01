import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import EndustriyelTemizlik from "../Components/product/EndustriyelTemizlik";
import { useTranslation } from "react-i18next";

function EndustriyelTemizlikPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("ENDÜSTRİYEL TEMİZLİK")} />
      <Spacer2 />
      <EndustriyelTemizlik />
    </>
  );
}

export default EndustriyelTemizlikPage;
