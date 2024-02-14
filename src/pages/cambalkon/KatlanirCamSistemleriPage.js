import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KatlanirCamSistemleri from "../../Components/product/cambalkon/KatlanirCamSistemleri";
// import Spacer2 from "../Components/common/Spacer2";

function KatlanirCamSistemleriPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Katlanır Cam Sistemleri")} />
      <KatlanirCamSistemleri />
    </>
  );
}

export default KatlanirCamSistemleriPage;
