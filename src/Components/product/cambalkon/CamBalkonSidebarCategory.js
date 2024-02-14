/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../../data/product.json";
import { Link } from "react-router-dom";
import SidebarCardOne from "../sidebar/SidebarCard0ne";

const CamBalkonSidebarCategory = (props) => {
  const {
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    nav1,
    nav2,
    nav3,
    nav4,
    nav5,
    nav6,
  } = props;
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };
  return (
    <>
      <div className="col-xl-3 col-lg-6 wow fadeInLeft" data-wow-delay="400ms">
        <div
          className="sidebar sidebar__left mb-3"
          style={{ backgroundColor: "#e44514", color: "#fff" }}
        >
          <div className="sidebar__single sidebar__category">
            <h3 className="sidebar__title">{t("KATEGORİLER")}</h3>
            <ul className="sidebar__category-list list-unstyled">
              <li>
                <Link as={Link} to={nav1} onClick={handleClick}>
                  {title1}
                </Link>
              </li>
              <li>
                <Link as={Link} to={nav2} onClick={handleClick}>
                  {title2}
                </Link>
              </li>
              <li>
                <Link as={Link} to={nav3} onClick={handleClick}>
                  {title3}
                </Link>
              </li>
              <li>
                <Link as={Link} to={nav4} onClick={handleClick}>
                  {title4}
                </Link>
              </li>
              <li>
                <Link as={Link} to={nav5} onClick={handleClick}>
                  {title5}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CamBalkonSidebarCategory;
