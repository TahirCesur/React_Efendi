import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import BitkiselUrunler from "../Components/product/BitkiselUrunler";
import { useTranslation } from "react-i18next";

function BitkiselUrunlerPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("BİTKİSEL ÜRÜNLER")} />
      <Spacer2 />
      <BitkiselUrunler />
    </>
  );
}

export default BitkiselUrunlerPage;
