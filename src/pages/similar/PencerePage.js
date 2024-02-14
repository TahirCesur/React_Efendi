import React from "react";
import Spacer2 from "../../Components/common/Spacer2";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";

function PencerePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Pencere Renkleri")} />
      <Spacer2 />
      <Pencere />
    </>
  );
}

export default PencerePage;
