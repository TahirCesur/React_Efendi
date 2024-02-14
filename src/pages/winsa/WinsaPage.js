import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Winsa from "../../Components/product/winsa/Winsa";
// import Spacer2 from "../Components/common/Spacer2";

function WinsaPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Pencere ve Kapı Sistemleri")} />
      <Winsa />
    </>
  );
}

export default WinsaPage;
