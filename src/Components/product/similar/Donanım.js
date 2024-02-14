/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import SimilarOne from "./SimilarOne";
import { SRLWrapper } from "simple-react-lightbox";

const Donanım = () => {
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
    380: {
      items: 1, // 601-768px ekran genişliği için 2 öğe göster
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
              <h2>{t("Donanım")}</h2>
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
                  picture="assets/images/winsa/winsa-kol-renk/antrasit-kol.webp"
                  title={t("ANTRASİT KOL")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-kol-renk/beyaz-kol.webp"
                  title={t("BEYAZ KOL")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-kol-renk/bronz-vizon-kol.webp"
                  title={t("BRONZ-VİZON KOL")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-kol-renk/metalikgumus-kol.webp"
                  title={t("METALİK-GÜMÜŞ KOL")}
                />
              </div>

              <div className="album-list-item">
                <SimilarOne
                  picture="assets/images/winsa/winsa-kol-renk/titan-gumus-kol.webp"
                  title={t("TİTAN-GÜMÜŞ KOL")}
                />
              </div>
            </ReactOwlCarousel>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Donanım;
