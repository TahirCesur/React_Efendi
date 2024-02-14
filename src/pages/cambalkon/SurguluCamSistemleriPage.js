import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import SurguluCamSistemleri from "../../Components/product/cambalkon/SurguluCamSistemleri";
// import Spacer2 from "../Components/common/Spacer2";

function SurguluCamSistemleriPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Sürgülü Cam Sistemleri")} />
      <SurguluCamSistemleri />
    </>
  );
}

export default SurguluCamSistemleriPage;
