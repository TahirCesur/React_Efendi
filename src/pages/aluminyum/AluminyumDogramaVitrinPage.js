import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import AluminyumDogramaVitrin from "../../Components/product/Aluminyum/AluminyumDogramaVitrin";
// import Spacer2 from "../Components/common/Spacer2";

function AluminyumDogramaVitrinPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Alüminyum Doğrama Vitrin")} />
      <AluminyumDogramaVitrin/>
    </>
  );
}

export default AluminyumDogramaVitrinPage;
