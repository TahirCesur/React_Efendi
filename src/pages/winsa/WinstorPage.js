import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import Winstor from "../../Components/product/winsa/Winstor";
// import Spacer2 from "../Components/common/Spacer2";

function WinstorPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Winstor")} />
      <Winstor />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default WinstorPage;