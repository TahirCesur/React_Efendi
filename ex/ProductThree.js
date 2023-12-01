/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

function ProductThree(props) {
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
        <div className="container">
          <ul className="page-header__breadcrumb list-unstyled">
            <li>
              <a href="index.html">{t(home)}</a>
            </li>
            <li>
              <span>{t(category)}</span>
            </li>
          </ul>
          <h2 className="page-header__title">{t(title)}</h2>
        </div>
      </SRLWrapper>
    </>
  );
}

export default ProductThree;
