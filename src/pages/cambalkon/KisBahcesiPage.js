import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KisBahcesi from "../../Components/product/cambalkon/KisBahcesi";
// import Spacer2 from "../Components/common/Spacer2";

function KisBahcesiPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Kış Bahçesi")} />
      <KisBahcesi />
    </>
  );
}

export default KisBahcesiPage;
