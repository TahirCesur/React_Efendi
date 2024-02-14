import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KupesteliCamBalkon from "../../Components/product/cambalkon/katlanır/KupesteliCamBalkon";
// import Spacer2 from "../Components/common/Spacer2";

function KupesteliCamBalkonPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Küpeşteli Cam Balkon Sistemleri")} />
      <KupesteliCamBalkon />
    </>
  );
}

export default KupesteliCamBalkonPage;
