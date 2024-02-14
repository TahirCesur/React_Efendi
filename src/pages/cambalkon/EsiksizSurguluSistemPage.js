import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import EsiksizSurguluSistem from "../../Components/product/cambalkon/surgulu/EsiksizSurguluSistem";
// import Spacer2 from "../Components/common/Spacer2";

function EsiksizSurguluSistemPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Eşiksiz Sürgülü Cam Sistemleri")} />
      <EsiksizSurguluSistem/>
    </>
  );
}

export default EsiksizSurguluSistemPage;
