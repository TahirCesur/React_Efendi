/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

function ProductTwo(props) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SRLWrapper>
        <div
          className="cta-two__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/footer-bg-1.png)",
          }}
        ></div>
      </SRLWrapper>
    </>
  );
}

export default ProductTwo;
