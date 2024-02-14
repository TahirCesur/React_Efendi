import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import GiyotinCamSistemleri from "../../Components/product/cambalkon/GiyotinCamSistemleri";
// import Spacer2 from "../Components/common/Spacer2";

function GiyotinCamSistemleriPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Giyotin Cam Sistemleri")} />
      <GiyotinCamSistemleri />
    </>
  );
}

export default GiyotinCamSistemleriPage;
