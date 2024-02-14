import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import EsikliSurguluSistem from "../../Components/product/cambalkon/surgulu/EsikliSurguluSistem";
// import Spacer2 from "../Components/common/Spacer2";

function EsikliSurguluSistemPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Eşikli Sürgülü Cam Sistemleri")} />
      <EsikliSurguluSistem/>
    </>
  );
}

export default EsikliSurguluSistemPage;
