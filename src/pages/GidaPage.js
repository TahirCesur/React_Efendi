import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import Gida from "../Components/product/Gida";

function GidaPage() {
  return (
    <>
      <PageHeader title="Gıda" />
      <Spacer2 />
      <Gida />
    </>
  );
}

export default GidaPage;
