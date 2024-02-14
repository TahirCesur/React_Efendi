import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pergole from "../../Components/product/cambalkon/kisbahcesi/Pergole";
// import Spacer2 from "../Components/common/Spacer2";

function PergolePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Pergole Sistemleri Kış Bahçesi")} />
      <Pergole/>
    </>
  );
}

export default PergolePage;
