import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import Gida from "../Components/product/Gida";
import { useTranslation } from "react-i18next";

function GidaPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("GIDA")} />
      <Spacer2 />
      <Gida />
    </>
  );
}

export default GidaPage;
