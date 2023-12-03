/* eslint-disable no-unused-vars */
import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PageHeader(props) {
  const { t } = useTranslation();

  return (
    <>
      <section className="page-header">
        <div
          className="cta-two__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/footer-bg-1.webp)",
          }}
        ></div>
        <div className="page-header__shape1"></div>
        <div className="page-header__shape2"></div>
        <div
          className="page-header__shape3 wow slideInRight"
          data-wow-delay="300ms"
        ></div>
        <div className="container">
          <ul className="page-header__breadcrumb list-unstyled">
            <li>
              <Link to="/">{t("Anasayfa")}</Link>
            </li>
            <li>
              <span>{t(props.title)}</span>
            </li>
          </ul>
          <h2 className="page-header__title">{t(props.title)}</h2>
        </div>
      </section>
    </>
  );
}

export default PageHeader;
