/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../../data/aluminyum.json";
import { Link } from "react-router-dom";
import SidebarCardOne from "../sidebar/SidebarCard0ne";
import SidebarCategory from "../winsa/WinsaSidebarCategory";
import PageTitle from "../../common/PageTitle";
import { Helmet } from "react-helmet";

function Aluminyum() {
  const pageDescription = "Alüminyum küpeşte günümüzde en çok tercih edilen merdiven korkuluğu modellerindendir. Gerek fiyat gerekse estetik açıdan uygun olmasının yanı sıra paslanmaya dayanıklı olması ve hızlı takılır sökülür olması da çok rağbet görme sebeplerindendir.";
  const pageKeywords = "Alüminyum Korkuluk Küpeşte";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/aluminyum";
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
        <title>{t("Alüminyum")}</title>
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
                    title={t("Alüminyum Korkuluk Küpeşte")}
                  />
                </div>

                <Row>
                  <SidebarCategory
                    title1={t("Alüminyum Korkuluk Küpeşte")}
                    nav1={"/aluminyum-korkuluk-kupeste"}
                    title2={t("Cam Korkuluk Sistemleri")}
                    nav2={"/cam-korkuluk-sistemleri"}
                    title3={t("Alüminyum Doğrama Vitrin")}
                    nav3={"/aluminyum-dograma-vitrin"}
                  />
                  {data.map((aluminyum) => {
                    const { picture, id, nav, price } = aluminyum;
                    const title = t(aluminyum.title);

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

export default Aluminyum;
