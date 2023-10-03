/* eslint-disable no-unused-vars */
import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PageHeader(props) {
  const { t } = useTranslation();

  return (
    <>
      <section class="page-header">
        <div class="page-header__bg"></div>
        <div class="page-header__shape1"></div>
        <div class="page-header__shape2"></div>
        <div
          class="page-header__shape3 wow slideInRight"
          data-wow-delay="300ms"
        ></div>
        <div class="container">
          <ul class="page-header__breadcrumb list-unstyled">
            <li>
              <a href="/">Anasayfa</a>
            </li>
            <li>
              <span>{props.title}</span>
            </li>
          </ul>
          <h2 class="page-header__title">{props.title}</h2>
        </div>
      </section>
    </>
  );
}

export default PageHeader;
