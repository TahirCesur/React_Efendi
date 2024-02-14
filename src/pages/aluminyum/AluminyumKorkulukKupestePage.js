import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import AluminyumKorkulukKupeste from "../../Components/product/Aluminyum/AluminyumKorkulukKupeste";
// import Spacer2 from "../Components/common/Spacer2";

function AluminyumKorkulukKupestePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Alüminyum Korkuluk Küpeşte")} />
      <AluminyumKorkulukKupeste/>
    </>
  );
}

export default AluminyumKorkulukKupestePage;
