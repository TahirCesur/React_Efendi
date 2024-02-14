import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import Dorado76 from "../../Components/product/winsa/Dorado76";
// import Spacer2 from "../Components/common/Spacer2";

function Dorado76Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Dorado 76")} />
      <Dorado76 />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default Dorado76Page;