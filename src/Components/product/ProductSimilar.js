/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

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
            <h2>Benzer ürünlerimiz</h2>
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
              <Link className="ali-link" onClick={handleClick} as={Link} to="/Armur">
                <div className="ali-img-wrap">
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/armür-1.jpg"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">Armür</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/Armur">
                <p>ARMÜR</p>
              </Link>
            </div>

            <div className="">
              <Link className="ali-link" onClick={handleClick} as={Link} to="/Fonluk">
                <div className="ali-img-wrap">
                <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/fon-1.jpg"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">Fonluk</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/Fonluk">
                <p>FONLUK</p>
              </Link>
            </div>

            <div className="album-list-item">
              <Link className="ali-link" onClick={handleClick} as={Link} to="/Brode">
                <div className="ali-img-wrap">
                <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/brode-2.jpg"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">Brode</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/Brode">
                <p>BRODE</p>
              </Link>
            </div>

            <div className="album-list-item">
              <Link className="ali-link" onClick={handleClick} as={Link} to="/Nakis">
                <div className="ali-img-wrap">
                <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/nakış-1.jpg"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">Nakış</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/Nakis">
                <p>NAKIŞ</p>
              </Link>
            </div>

            <div className="album-list-item">
              <Link className="ali-link" onClick={handleClick} as={Link} to="/Orme">
                <div className="ali-img-wrap">
                <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/örme-1.jpg"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">Örme</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/Orme">
                <p>ÖRME</p>
              </Link>
            </div>

            <div className="album-list-item">
              <Link className="ali-link" onClick={handleClick} as={Link} to="/Baskili">
                <div className="ali-img-wrap">
                <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/baski-4.jpg"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
                <div className="ali-caption">
                  <p className="ali-title">Baskılı</p>
                  <div className="ali-meta"></div>
                </div>
              </Link>
              <Link className="ali-link-my" onClick={handleClick} as={Link} to="/Baskili">
                <p>BASKILI</p>
              </Link>
            </div>
          </ReactOwlCarousel>
        </div>
      </section>
    </>
  );
};

export default ProductSimilar;
