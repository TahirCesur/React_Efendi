import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import VerandaSabitCamTavan from "../../Components/product/cambalkon/kisbahcesi/VerandaSabitCamTavan";

// import Spacer2 from "../Components/common/Spacer2";

function VerandaSabitCamTavanPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Veranda Sabit Cam Tavan Sistemleri Kış Bahçesi")} />
      <VerandaSabitCamTavan/>
    </>
  );
}

export default VerandaSabitCamTavanPage;
