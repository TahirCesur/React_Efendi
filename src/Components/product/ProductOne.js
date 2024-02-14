/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const ProductOne = () => {

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
    400: {
      items: 1, // 601-768px ekran genişliği için 2 öğe göster
    },
    575: {
      items: 2, // 601-768px ekran genişliği için 2 öğe göster
    },
    721: {
      items: 3, // 769-992px ekran genişliği için 3 öğe göster
    },
<<<<<<< HEAD

=======
    993: {
      items: 4, // 993px ve üzeri ekran genişliği için 4 öğe göster
    },
    1400: {
      items: 5, // 993px ve üzeri ekran genişliği için 4 öğe göster
    },
>>>>>>> 4babdcf2736bde5572026c59c009f171f55647ef
  };

  return (
    <>
      <section id="" className="album-list-carousel mb-0">
        <div id="111" className="content-wrap caption-gradient ali-style-2">
          <div class="section-header">
            <h2>{t("Ürünlerimiz")}</h2>
            <p>{t("En yeni trend perde modellerimiz sizleri bekliyor..")}</p>
          </div>
          <ReactOwlCarousel
            className="owl-carousel dots-rounded dots-outside nav-rounded nav-outside margin-top-30 margin-bottom-30"
            items={3}
            margin={20}
            nav
            dots={false}
            responsive={responsiveOptions} // responsive seçeneklerini ekleyin
          >
            <div className="album-list-item">
              <Link className="ali-link" onClick={handleClick} as={Link} to="/winsa">
                <div className="ali-img-wrap">
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/11.webp"
                      alt={t("PVC Pencere ve Kapı Sistemleri")}
                      title={t("PVC Pencere ve Kapı Sistemleri")}
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">{t("PVC Pencere ve Kapı Sistemleri")}</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/winsa">
                <p>{t("PVC Pencere ve Kapı Sistemleri")}</p>
              </Link>
            </div>

            <div className="album-list-item">
              <Link className="ali-link" onClick={handleClick} as={Link} to="/cam-balkon">
                <div className="ali-img-wrap">
                <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/22.webp"
                      alt={t("Cam Balkon Sistemleri")}
                      title={t("Cam Balkon Sistemleri")}
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">{t("Cam Balkon Sistemleri")}</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/cam-balkon">
                <p>{t("Cam Balkon Sistemleri")}</p>
              </Link>
            </div>

            <div className="album-list-item">
              <Link className="ali-link" onClick={handleClick} as={Link} to="/aluminyum">
                <div className="ali-img-wrap">
                <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/aluminyum/122.webp"
                      alt={t("Alüminyum Korkuluk Küpeşte")}
                      title={t("Alüminyum Korkuluk Küpeşte")}
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">{t("Alüminyum Korkuluk Küpeşte")}</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/aluminyum">
                <p>{t("Alüminyum Korkuluk Küpeşte")}</p>
              </Link>
            </div>
          </ReactOwlCarousel>
        </div>
      </section>
    </>
  );
};

export default ProductOne;
