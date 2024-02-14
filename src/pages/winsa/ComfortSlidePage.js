import React from "react";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pencere from "../../Components/product/similar/Pencere";
import Donanım from "../../Components/product/similar/Donanım";
import ComfortSlide from "../../Components/product/winsa/ComfortSlide";
// import Spacer2 from "../Components/common/Spacer2";

function ComfortSlidePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Comfort Slide")} />
      <ComfortSlide />
      <Pencere/>
      <Donanım/>
    </>
  );
}

export default ComfortSlidePage;