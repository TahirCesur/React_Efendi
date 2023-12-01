// AmbalajAluminyumFolyoKisa.js
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";
import ProductTwo from "./ProductTwo";
import ProductThree from "./ProductThree";
import ProductFour from "./ProductFour";

function ProTaslak(props) {
  const { t } = useTranslation();
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
        <section className="page-header">
          <ProductTwo />
          <ProductThree
            home={home}
            category={category}
            picture={picture}
            title={title}
          />
        </section>
        <section className="product">
          <ProductFour
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
        </section>
      </SRLWrapper>
    </>
  );
}

export default ProTaslak;
