/* eslint-disable no-unused-vars */
import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PageHeader(props) {
  const { t } = useTranslation();

  return (
    <>
      <div class="breadcrumbs text-center">
          <div class="container">
            <h1>{props.title}</h1>
            <ul
              class="breadcrumb bg-transparent m-0 p-0 justify-content-center"
            >
              <li class="breadcrumb-item">
                <Link as={Link} to="/" title="Home">{t("Anasayfa")}</Link>
              </li>
              <li class="breadcrumb-item active">{props.title}</li>
            </ul>
          </div>
        </div>
    </>
  );
}

export default PageHeader;
