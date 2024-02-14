import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import IsiCamliCam from "../../Components/product/cambalkon/isicam/IsiCamliCam";
// import Spacer2 from "../Components/common/Spacer2";

function IsiCamliCamPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Isı Camlı Cam Balkon Sistemleri")} />
      <IsiCamliCam/>
    </>
  );
}

export default IsiCamliCamPage;
