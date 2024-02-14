import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KilavuzsuzKupesteliCamBalkon from "../../Components/product/cambalkon/katlanır/KilavuzsuzKupesteliCamBalkon";
// import Spacer2 from "../Components/common/Spacer2";

function KilavuzsuzKupesteliCamBalkonPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Kılavuzsuz Küpeşteli Cam Balkon Sistemleri")} />
      <KilavuzsuzKupesteliCamBalkon />
    </>
  );
}

export default KilavuzsuzKupesteliCamBalkonPage;
