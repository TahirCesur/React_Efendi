import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import CamBalkon from "../../Components/product/cambalkon/CamBalkon";
// import Spacer2 from "../Components/common/Spacer2";

function CamBalkonPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Cam Balkon Sistemleri")} />
      <CamBalkon />
    </>
  );
}

export default CamBalkonPage;
