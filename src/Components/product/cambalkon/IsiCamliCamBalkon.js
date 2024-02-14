/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../../data/isicamlicambalkon.json";
import { Link } from "react-router-dom";
import SidebarCardOne from "../sidebar/SidebarCard0ne";
import PageTitle from "../../common/PageTitle";
import CamBalkonSidebarCategory from "./CamBalkonSidebarCategory";
import { Helmet } from "react-helmet";

function IsiCamliCamBalkon() {
  const pageDescription = "";
  const pageKeywords = "Isı Camlı Cam Sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/isi-camli-cam-balkon";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

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
      <Helmet>
        <title>{t("Isıcamlı Cam Balkon")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <section className="blog-one mt-5">
          <div className="container">
            <div className="blog-page">
              <Container data-aos="fade-up">
                <div className="row">
                  <PageTitle
                    company={t("ŞEKİR YAPI")}
                    title={t("Cam Balkon Sistemleri")}
                  />
                </div>

                <Row>
                  <CamBalkonSidebarCategory
                    title1={t("Katlanır Cam Balkon")}
                    nav1={"/katlanir-cam-sistemleri"}
                    title2={t("Isıcamlı Cam Balkon")}
                    nav2={"/isi-camli-cam-balkon"}
                    title3={t("Sürgülü Cam Sistemleri")}
                    nav3={"/surgulu-cam-sistemleri"}
                    title4={t("Giyotin Cam Sistemleri")}
                    nav4={"/giyotin-cam-sistemleri"}
                    title5={t("Kış Bahçesi")}
                    nav5={"/kis-bahcesi"}
                  />
                  {data.map((isicamlicambalkon) => {
                    const { picture, id, nav, price } = isicamlicambalkon;
                    const title = t(isicamlicambalkon.title);

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
    </>
  );
}

export default IsiCamliCamBalkon;
