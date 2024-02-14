import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import Winkepenk from "../../Components/product/winsa/Winkepenk";
// import Spacer2 from "../Components/common/Spacer2";

function WinkepenkPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Winkepenk")} />
      <Winkepenk />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default WinkepenkPage;