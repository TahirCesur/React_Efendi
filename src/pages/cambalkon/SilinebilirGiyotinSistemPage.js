import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import SilinebilirGiyotinSistem from "../../Components/product/cambalkon/giyotin/SilinebilirGiyotinSistem";
// import Spacer2 from "../Components/common/Spacer2";

function SilinebilirGiyotinSistemPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Silinebilir Giyotin Cam Sistemleri")} />
      <SilinebilirGiyotinSistem/>
    </>
  );
}

export default SilinebilirGiyotinSistemPage;
