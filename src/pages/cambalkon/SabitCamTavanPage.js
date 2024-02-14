import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import SabitCamTavan from "../../Components/product/cambalkon/kisbahcesi/SabitCamTavan";

// import Spacer2 from "../Components/common/Spacer2";

function SabitCamTavanPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Sabit Cam Tavan Sistemleri Kış Bahçesi")} />
      <SabitCamTavan/>
    </>
  );
}

export default SabitCamTavanPage;
