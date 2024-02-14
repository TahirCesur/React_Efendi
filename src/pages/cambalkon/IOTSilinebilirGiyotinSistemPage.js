import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import IOTSilinebilirGiyotinSistem from "../../Components/product/cambalkon/giyotin/IOTSilinebilirGiyotinSistem";
// import Spacer2 from "../Components/common/Spacer2";

function IOTSilinebilirGiyotinSistemPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("IOT Silinebilir Giyotin Cam Sistemleri")} />
      <IOTSilinebilirGiyotinSistem/>
    </>
  );
}

export default IOTSilinebilirGiyotinSistemPage;
