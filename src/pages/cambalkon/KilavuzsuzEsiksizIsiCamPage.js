import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KilavuzsuzEsiksizIsiCam from "../../Components/product/cambalkon/isicam/KilavuzsuzEsiksizIsiCam";
// import Spacer2 from "../Components/common/Spacer2";

function KilavuzsuzEsiksizIsiCamPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Kılavuzsuz Eşiksiz Isı Cam Balkon Sistemleri")} />
      <KilavuzsuzEsiksizIsiCam />
    </>
  );
}

export default KilavuzsuzEsiksizIsiCamPage ;
