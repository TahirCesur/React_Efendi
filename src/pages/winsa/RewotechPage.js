import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import Rewotech from "../../Components/product/winsa/Rewotech";
// import Spacer2 from "../Components/common/Spacer2";

function RewotechPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Rewotech")} />
      <Rewotech />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default RewotechPage;