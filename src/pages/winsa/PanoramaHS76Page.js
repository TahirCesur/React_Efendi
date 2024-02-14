import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import PanoramaHS76 from "../../Components/product/winsa/PanoramaHS76";
// import Spacer2 from "../Components/common/Spacer2";

function PanoramaHS76Page() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Panorama HS 76")} />
      <PanoramaHS76 />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default PanoramaHS76Page;