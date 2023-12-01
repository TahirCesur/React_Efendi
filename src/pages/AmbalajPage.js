import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import Ambalaj from "../Components/product/Ambalaj";
import { useTranslation } from "react-i18next";

function AmbalajPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("AMBALAJ")} />
      <Spacer2 />
      <Ambalaj />
    </>
  );
}

export default AmbalajPage;
