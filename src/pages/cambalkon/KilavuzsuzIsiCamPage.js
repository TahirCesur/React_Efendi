import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KilavuzsuzIsiCam from "../../Components/product/cambalkon/isicam/KilavuzsuzIsiCam";
// import Spacer2 from "../Components/common/Spacer2";

function KilavuzsuzIsiCamPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Kılavuzsuz Isı Cam Balkon Sistemleri")} />
      <KilavuzsuzIsiCam/>
    </>
  );
}

export default KilavuzsuzIsiCamPage;
