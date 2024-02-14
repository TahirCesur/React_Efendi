import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import RewotechGold from "../../Components/product/winsa/RewotechGold";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
// import Spacer2 from "../Components/common/Spacer2";

function RewotechGoldPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Rewotech Gold")} />
      <RewotechGold />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default RewotechGoldPage;