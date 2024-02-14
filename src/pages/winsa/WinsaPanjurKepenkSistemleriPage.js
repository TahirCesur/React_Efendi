import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import WinsaPanjurKepenkSistemleri from "../../Components/product/winsa/WinsaPanjurKepenkSistemleri";
// import Spacer2 from "../Components/common/Spacer2";

function WinsaPanjurKepenkSistemleriPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Panjur ve Kepenk Sistemleri")} />
      <WinsaPanjurKepenkSistemleri />
      
    </>
  );
}

export default WinsaPanjurKepenkSistemleriPage;
