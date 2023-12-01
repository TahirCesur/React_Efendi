import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import EndustriyelKagit from "../Components/product/EndustriyelKagit";
import { useTranslation } from "react-i18next";

function EndustriyelKagitPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("ENDÜSTRİYEL KAĞIT")} />
      <Spacer2 />
      <EndustriyelKagit />
    </>
  );
}

export default EndustriyelKagitPage;
