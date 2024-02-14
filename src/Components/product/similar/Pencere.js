/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import SimilarOne from "./SimilarOne";
import { SRLWrapper } from "simple-react-lightbox";

const Pencere = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const responsiveOptions = {
    0: {
      items: 1, // 0-600px ekran genişliği için 1 öğe göster
    },
    480: {
      items: 2, // 601-768px ekran genişliği için 2 öğe göster
    },
    575: {
      items: 2, // 601-768px ekran genişliği için 2 öğe göster
    },
    721: {
      items: 3, // 769-992px ekran genişliği için 3 öğe göster
    },
    993: {
      items: 4, // 993px ve üzeri ekran genişliği için 4 öğe göster
    },
  };

  return (
    <>
      <SRLWrapper>
        <section id="" className="album-list-carousel mb-0">
          <div id="111" className="content-wrap caption-gradient ali-style-2">
            <div class="section-header">
              <h2>{t("Renk Seçeneklerimiz")}</h2>
            </div>
            <ReactOwlCarousel
              className="owl-carousel dots-rounded dots-outside nav-rounded nav-outside margin-top-30 margin-bottom-30"
              items={4}
              margin={20}
              nav
              dots={false}
              responsive={responsiveOptions} // responsive seçeneklerini ekleyin
            >
              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/1-altin-mese.webp"
                  title={t("ALTIN MEŞE")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/2-antik-mese.webp"
                  title={t("ANTİK MEŞE")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/3-antrasit-gri.webp"
                  title={t("ANTRASİT GRİ")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  nav="/Nakis"
                  picture="assets/images/winsa/winsa-pencere-renk/4-findik.webp"
                  title={t("FINDIK")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/5-crown-platin.webp"
                  title={t("CROWN PLATİN")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/6-krem.webp"
                  title={t("KREM")}
                />
              </div>
              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/7-kul-siyahi.webp"
                  title={t("KÜL SİYAHI")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/8-maun.webp"
                  title={t("MAUN")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/9-metalik-antrasit.webp"
                  title={t("METALİK ANTRASİT")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/10-metalik-gumus.webp"
                  title={t("METALİK GÜMÜŞ")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/11-pyrite.webp"
                  title={t("PYRİTE")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/12-vizon.webp"
                  title={t("VİZON")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-pencere-renk/13-winchester.webp"
                  title={t("WİNCHESTER")}
                />
              </div>
            </ReactOwlCarousel>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Pencere;
