import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import AluminyumKupeste from "../../Components/product/Aluminyum/Aluminyum";
// import Spacer2 from "../Components/common/Spacer2";

function AluminyumKupestePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Alüminyum Küpeşte")} />
      <AluminyumKupeste />
      
    </>
  );
}

export default AluminyumKupestePage;
