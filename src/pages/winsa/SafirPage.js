import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import Safir from "../../Components/product/winsa/Safir";
// import Spacer2 from "../Components/common/Spacer2";

function SafirPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Safir")} />
      <Safir />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default SafirPage;