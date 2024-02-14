import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import Lotus from "../../Components/product/winsa/Lotus";
// import Spacer2 from "../Components/common/Spacer2";

function LotusPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Lotus")} />
      <Lotus />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default LotusPage;