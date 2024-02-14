import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import KlasikGiyotinSistem from "../../Components/product/cambalkon/giyotin/KlasikGiyotinSistem";
// import Spacer2 from "../Components/common/Spacer2";

function KlasikGiyotinSistemPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Klasik Giyotin Cam Sistemleri")} />
      <KlasikGiyotinSistem/>
    </>
  );
}

export default KlasikGiyotinSistemPage;
