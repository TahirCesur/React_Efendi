import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import IsiCamliCamBalkon from "../../Components/product/cambalkon/IsiCamliCamBalkon";
// import Spacer2 from "../Components/common/Spacer2";

function IsiCamliCamBalkonPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Isı Camlı Cam Balkon Sistemleri")} />
      <IsiCamliCamBalkon />
    </>
  );
}

export default IsiCamliCamBalkonPage;
