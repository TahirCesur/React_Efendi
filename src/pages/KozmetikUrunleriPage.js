import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import KozmetikUrunleri from "../Components/product/KozmetikUrunleri";

function KozmetikUrunleriPage() {
  return (
    <>
      <PageHeader title="KOZMETİK ÜRÜNLERİ" />
      <Spacer2 />
      <KozmetikUrunleri />  
    </>
  );
}

export default KozmetikUrunleriPage;
