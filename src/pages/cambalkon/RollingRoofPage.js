import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import RollingRoof from "../../Components/product/cambalkon/kisbahcesi/RollingRoof";
// import Spacer2 from "../Components/common/Spacer2";

function RollingRoofPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Rolling Roof Sistemleri Kış Bahçesi")} />
      <RollingRoof/>
    </>
  );
}

export default RollingRoofPage;
