import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import BitkiselUrunler from "../Components/product/BitkiselUrunler";

function BitkiselUrunlerPage() {
  return (
    <>
      <PageHeader title="BİTKİSEL ÜRÜNLER" />
      <Spacer2 />
      <BitkiselUrunler />
    </>
  );
}

export default BitkiselUrunlerPage;
