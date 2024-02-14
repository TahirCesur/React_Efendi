import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KilavuzsuzCamBalkon from "../../Components/product/cambalkon/katlanır/KilavuzsuzCamBalkon";
// import Spacer2 from "../Components/common/Spacer2";

function KilavuzsuzCamBalkonPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Kılavuzsuz Cam Balkon Sistemleri")} />
      <KilavuzsuzCamBalkon />
    </>
  );
}

export default KilavuzsuzCamBalkonPage;
