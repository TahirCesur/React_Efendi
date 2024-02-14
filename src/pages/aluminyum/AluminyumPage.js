import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Aluminyum from "../../Components/product/Aluminyum/Aluminyum";
// import Spacer2 from "../Components/common/Spacer2";

function AluminyumPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Alüminyum Korkuluk Küpeşte")} />
      <Aluminyum />
    </>
  );
}

export default AluminyumPage;
