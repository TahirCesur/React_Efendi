import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import EsiksizCamBalkon from "../../Components/product/cambalkon/katlanır/EsiksizCamBalkon";
// import Spacer2 from "../Components/common/Spacer2";

function EsiksizCamBalkonPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Eşiksiz Cam Balkon Sistemleri")} />
      <EsiksizCamBalkon />
    </>
  );
}

export default EsiksizCamBalkonPage;
