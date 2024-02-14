import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KustepeliIsiCam from "../../Components/product/cambalkon/isicam/KustepeliIsiCam";
// import Spacer2 from "../Components/common/Spacer2";

function KupesteliIsiCamPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Küpeşteli Isı Cam Balkon Sistemleri")} />
      <KustepeliIsiCam/>
    </>
  );
}

export default KupesteliIsiCamPage;
