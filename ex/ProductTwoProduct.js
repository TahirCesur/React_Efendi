/* eslint-disable no-lone-blocks */
// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";
import ProductTwo from "./ProductTwo";
import data from "../src/data/producttwo.json";

function ProductTwoProduct(props) {
  const { t } = useTranslation();
  {data.map((product) => {
  const {
    home,
    category,
    picture,
    title,
    mini,
    desctitle1,
    desctitle2,
    desctitle3,
    desctitle4,
    desctitle5,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    share,
  } = props;

  return (
    <>
      <SRLWrapper>
        <ProductTwo
          home={home}
          category={category}
          picture={picture}
          title={title}
          mini={mini}
          desctitle1={desctitle1}
          desctitle2={desctitle2}
          desctitle3={desctitle3}
          desctitle4={desctitle4}
          desctitle5={desctitle5}
          desc1={desc1}
          desc2={desc2}
          desc3={desc3}
          desc4={desc4}
          desc5={desc5}
          share={share}
        />
        
      </SRLWrapper>
    </>
  );
})};
}

export default ProductTwoProduct;
