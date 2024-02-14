import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Galeri from "../galeri/Galeri";
// import Spacer2 from "../Components/common/Spacer2";

function GaleriPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Uygulamalarımız")} />
      <Galeri />
    </>
  );
}

export default GaleriPage;