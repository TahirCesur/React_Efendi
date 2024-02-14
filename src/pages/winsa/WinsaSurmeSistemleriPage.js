import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import WinsaSurmeSistemleri from "../../Components/product/winsa/WinsaSurmeSistemleri";
// import Spacer2 from "../Components/common/Spacer2";

function WinsaSurmeSistemleriPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Sürme Sistemleri")} />
      <WinsaSurmeSistemleri />
      
    </>
  );
}

export default WinsaSurmeSistemleriPage;
