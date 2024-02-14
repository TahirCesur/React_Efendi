/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Row } from "react-bootstrap";
import data from "../../../data/product.json";
import { t } from "i18next";
import SidebarCardOne from "./SidebarCard0ne";

const SidebarCard = () => {
  return (
    <>
      <Row>
        <div class="account-nav mb-5 mb-sm-0 col-12 col-sm-3 col-md-3">
          <div
            class="nav flex-row flex-sm-nowrap flex-sm-column nav-pills"
            id="v-pills-tab"
            role="tablist"
          >
            <ul className="list-group">
              <li>
                <a
                  class="nav-link active"
                  id="my-account-home-tab"
                  data-toggle="pill"
                  href="#my-account-home"
                  role="tab"
                  aria-controls="my-account-home"
                  aria-selected="true"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  class="nav-link"
                  id="my-account-order-tab"
                  data-toggle="pill"
                  href="#my-account-order"
                  role="tab"
                  aria-controls="my-account-order"
                  aria-selected="false"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  class="nav-link"
                  id="my-account-downloads-tab"
                  data-toggle="pill"
                  href="#my-account-downloads"
                  role="tab"
                  aria-controls="my-account-downloads"
                  aria-selected="false"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  class="nav-link"
                  id="my-account-address-tab"
                  data-toggle="pill"
                  href="#my-account-address"
                  role="tab"
                  aria-controls="my-account-address"
                  aria-selected="false"
                >
                  Addresses
                </a>
              </li>
              <li>
                <a
                  class="nav-link"
                  id="my-account-details-tab"
                  data-toggle="pill"
                  href="#my-account-details"
                  role="tab"
                  aria-controls="my-account-details"
                  aria-selected="false"
                >
                  Account Details
                </a>
              </li>
            </ul>
          </div>
        </div>
        {data.map((product) => {
          const { picture, id, nav } = product;
          const title = t(product.title);

          return (
            <Col md={4} key={id} className="text-center sidebars">
              <SidebarCardOne picture={picture} title={title} nav={nav} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default SidebarCard;
