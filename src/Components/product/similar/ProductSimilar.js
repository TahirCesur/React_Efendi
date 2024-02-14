/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import SimilarOne from "./SimilarOne";

const ProductSimilar = () => {
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
      <section id="" className="album-list-carousel mb-0">
        <div id="111" className="content-wrap caption-gradient ali-style-2">
          <div class="section-header">
            <h2>{t("Benzer Ürünlerimiz")}</h2>
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
                nav="/Armur"
                picture="assets/images/products/armür-1.jpg"
                title="ARMÜR"
              />
            </div>

            <div className="album-list-item">
              <SimilarOne
                nav="/Fonluk"
                picture="assets/images/products/fon-1.jpg"
                title="FONLUK"
              />
            </div>

            <div className="album-list-item">
              <SimilarOne
                nav="/Brode"
                picture="assets/images/products/brode-2.jpg"
                title="BRODE"
              />
            </div>

            <div className="album-list-item">
              <SimilarOne
                nav="/Nakis"
                picture="assets/images/products/nakış-1.jpg"
                title="NAKIŞ"
              />
            </div>

            <div className="album-list-item">
              <SimilarOne
                nav="/Orme"
                picture="assets/images/products/örme-1.jpg"
                title="ÖRME"
              />
            </div>

            <div className="album-list-item">
              <SimilarOne
                nav="/Baskili"
                picture="assets/images/products/baski-4.jpg"
                title="BASKILI"
              />
            </div>
          </ReactOwlCarousel>
        </div>
      </section>
    </>
  );
};

export default ProductSimilar;
