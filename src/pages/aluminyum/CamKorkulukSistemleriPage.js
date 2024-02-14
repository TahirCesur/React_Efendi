import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import CamKorkulukSistemleri from "../../Components/product/Aluminyum/CamKorkulukSistemleri";
// import Spacer2 from "../Components/common/Spacer2";

function CamKorkulukSistemleriPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Cam Korkuluk Sistemleri")} />
      <CamKorkulukSistemleri/>
    </>
  );
}

export default CamKorkulukSistemleriPage;
