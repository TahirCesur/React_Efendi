import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import ProductSimilar from "../Components/product/ProductSimilar";
import Sidebar from "../Components/product/Sidebar";
// import Spacer2 from "../Components/common/Spacer2";

function SidebarPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Armür Perde")} />
      <Sidebar />
      <ProductSimilar/>
    </>
  );
}

export default SidebarPage;