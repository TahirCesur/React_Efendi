import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KilavuzsuzEsiksizCamBalkon from "../../Components/product/cambalkon/katlanır/KilavuzsuzEsiksizCamBalkon";
// import Spacer2 from "../Components/common/Spacer2";

function KilavuzsuzEsiksizCamBalkonPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Kılavuzsuz Eşiksiz Cam Balkon Sistemleri")} />
      <KilavuzsuzEsiksizCamBalkon />
    </>
  );
}

export default KilavuzsuzEsiksizCamBalkonPage;
