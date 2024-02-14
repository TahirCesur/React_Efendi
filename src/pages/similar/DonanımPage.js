import React from "react";
import Spacer2 from "../../Components/common/Spacer2";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Donanım from "../../Components/product/similar/Donanım";

function DonanımPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Pencere Renkleri")} />
      <Spacer2 />
      <Donanım />
    </>
  );
}

export default DonanımPage;
