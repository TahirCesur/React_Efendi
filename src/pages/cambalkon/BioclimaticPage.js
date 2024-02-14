import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Bioclimatic from "../../Components/product/cambalkon/kisbahcesi/Bioclimatic";
// import Spacer2 from "../Components/common/Spacer2";

function BioclimaticPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Bioclimatic Sistemleri Kış Bahçesi")} />
      <Bioclimatic/>
    </>
  );
}

export default BioclimaticPage;
