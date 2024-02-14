import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KatlanirCamBalkon from "../../Components/product/cambalkon/katlanır/KatlanirCamBalkon";
// import Spacer2 from "../Components/common/Spacer2";

function KatlanirCamBalkonPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Katlanır Cam Balkon Sistemleri")} />
      <KatlanirCamBalkon />
    </>
  );
}

export default KatlanirCamBalkonPage;
