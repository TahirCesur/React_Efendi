import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import EsiksizIsiCam from "../../Components/product/cambalkon/isicam/EsiksizIsiCam";
// import Spacer2 from "../Components/common/Spacer2";

function EsiksizIsiCamPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Eşiksiz Isı Cam Balkon Sistemleri")} />
      <EsiksizIsiCam />
    </>
  );
}

export default EsiksizIsiCamPage;
