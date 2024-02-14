import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import Safir76 from "../../Components/product/winsa/Safir76";
// import Spacer2 from "../Components/common/Spacer2";

function Safir76Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Safir 76")} />
      <Safir76 />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default Safir76Page;