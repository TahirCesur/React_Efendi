/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../../data/product.json";
import { Link } from "react-router-dom";
import SidebarCardOne from "./SidebarCard0ne";
import SidebarCategory from "../winsa/WinsaSidebarCategory";
import PageTitle from "../../common/PageTitle";

function Sidebar() {
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
    <SRLWrapper>
      <section className="blog-one mt-5">
        <div className="container">
          <div className="blog-page">
            <Container data-aos="fade-up">
              <div className="row">
                <PageTitle
                  company="Şekir Yapı"
                  title="PVC Pencere ve Kapı Sistemleri"
                />
              </div>

              <Row>
                <SidebarCategory
                  title1={t("Pencere ve Kapı Sistemleri")}
                  nav1={"/"}
                  title2={t("Pencere ve Kapı Sistemleri")}
                  title3={t("Pencere ve Kapı Sistemleri")}
                />
                {data.map((product) => {
                  const { picture, id, nav, price } = product;
                  const title = t(product.title);

                  return (
                    <Col md={3} key={id} className="text-center mb-4">
                      <SidebarCardOne
                        picture={picture}
                        title={title}
                        price={price}
                        nav={nav}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default Sidebar;
