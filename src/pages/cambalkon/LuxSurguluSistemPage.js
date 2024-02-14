import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import LuxSurguluSistem from "../../Components/product/cambalkon/surgulu/LuxSurguluSistem";
// import Spacer2 from "../Components/common/Spacer2";

function LuxSurguluSistemPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Lüx Sürgülü Cam Sistemleri")} />
      <LuxSurguluSistem/>
    </>
  );
}

export default LuxSurguluSistemPage;
