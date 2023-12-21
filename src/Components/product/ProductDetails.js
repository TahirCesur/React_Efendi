/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

function ProductDetails() {

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
    <ReactOwlCarousel
            className="owl-carousel dots-rounded dots-outside nav-rounded nav-outside margin-top-30 margin-bottom-30"
            items={4}
            margin={20}
            nav
            dots={false}
            responsive={responsiveOptions} // responsive seçeneklerini ekleyin
          >
      <div class="tab-content responsiveTabs">
        <div id="tab1" class="drawertab-content">
          <div class="row row-sp row-eq-height prcarousel">
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/armür-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/armür-1.jpg"
                        data-src="assets/images/products/armür-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="/Armur">Armür</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/fon-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/fon-1.jpg"
                        data-src="assets/images/products/fon-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="/Fonluk">Fonluk</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/brode-2.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/brode-2.jpg"
                        data-src="assets/images/products/brode-2.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="/Brode">Brode</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/nakış-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/nakış-1.jpg"
                        data-src="assets/images/products/nakış-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="/Nakis">Nakış</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/örme-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/örme-1.jpg"
                        data-src="assets/images/products/örme-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="/Orme">Örme</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/baski-4.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/baski-4.jpg"
                        data-src="assets/images/products/baski-4.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="/Baskili">Baskılı</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* <h3 class="tab-drawer-heading" data-tab="tab2">
          <a>Fonluk</a>
        </h3>
        <div id="tab2" class="drawertab-content">
          <div class="row row-sp row-eq-height prcarousel">
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/armür-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/armür-1.jpg"
                        data-src="assets/images/products/armür-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="armür.html">Armür</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/fon-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/fon-1.jpg"
                        data-src="assets/images/products/fon-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="fonluk.html">Fonluk</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/brode-2.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/brode-2.jpg"
                        data-src="assets/images/products/brode-2.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="brode.html">Brode</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/nakış-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/nakış-1.jpg"
                        data-src="assets/images/products/nakış-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="nakis.html">Nakış</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/örme-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/örme-1.jpg"
                        data-src="assets/images/products/örme-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="orme.html">Örme</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/baski-4.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/baski-4.jpg"
                        data-src="assets/images/products/baski-4.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="baskili.html">Baskılı</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="tab-drawer-heading" data-tab="tab3">
          <a>Brode</a>
        </h3>
        <div id="tab3" class="drawertab-content">
          <div class="row row-sp row-eq-height prcarousel">
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/armür-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/armür-1.jpg"
                        data-src="assets/images/products/armür-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="armür.html">Armür</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/fon-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/fon-1.jpg"
                        data-src="assets/images/products/fon-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="fonluk.html">Fonluk</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/brode-2.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/brode-2.jpg"
                        data-src="assets/images/products/brode-2.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="brode.html">Brode</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/nakış-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/nakış-1.jpg"
                        data-src="assets/images/products/nakış-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="nakis.html">Nakış</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/örme-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/örme-1.jpg"
                        data-src="assets/images/products/örme-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="orme.html">Örme</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/baski-4.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/baski-4.jpg"
                        data-src="assets/images/products/baski-4.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="baskili.html">Baskılı</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="tab-drawer-heading" data-tab="tab4">
          <a>Nakış</a>
        </h3>
        <div id="tab4" class="drawertab-content">
          <div class="row row-sp row-eq-height prcarousel">
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/armür-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/armür-1.jpg"
                        data-src="assets/images/products/armür-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="armür.html">Armür</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/fon-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/fon-1.jpg"
                        data-src="assets/images/products/fon-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="fonluk.html">Fonluk</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/brode-2.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/brode-2.jpg"
                        data-src="assets/images/products/brode-2.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="brode.html">Brode</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/nakış-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/nakış-1.jpg"
                        data-src="assets/images/products/nakış-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="nakis.html">Nakış</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/örme-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/örme-1.jpg"
                        data-src="assets/images/products/örme-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="orme.html">Örme</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/baski-4.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/baski-4.jpg"
                        data-src="assets/images/products/baski-4.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="baskili.html">Baskılı</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="tab-drawer-heading" data-tab="tab5">
          <a>Örme</a>
        </h3>
        <div id="tab5" class="drawertab-content">
          <div class="row row-sp row-eq-height prcarousel">
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/armür-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/armür-1.jpg"
                        data-src="assets/images/products/armür-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="armür.html">Armür</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/fon-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/fon-1.jpg"
                        data-src="assets/images/products/fon-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="fonluk.html">Fonluk</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/brode-2.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/brode-2.jpg"
                        data-src="assets/images/products/brode-2.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="brode.html">Brode</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/nakış-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/nakış-1.jpg"
                        data-src="assets/images/products/nakış-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="nakis.html">Nakış</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/örme-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/örme-1.jpg"
                        data-src="assets/images/products/örme-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="orme.html">Örme</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/baski-4.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/baski-4.jpg"
                        data-src="assets/images/products/baski-4.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="baskili.html">Baskılı</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="tab-drawer-heading" data-tab="tab6">
          <a>Baskılı Ürünler</a>
        </h3>
        <div id="tab6" class="drawertab-content">
          <div class="row row-sp row-eq-height prcarousel">
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/armür-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/armür-1.jpg"
                        data-src="assets/images/products/armür-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="armür.html">Armür</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/fon-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/fon-1.jpg"
                        data-src="assets/images/products/fon-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="fonluk.html">Fonluk</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/brode-2.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/brode-2.jpg"
                        data-src="assets/images/products/brode-2.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="brode.html">Brode</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/nakış-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/nakış-1.jpg"
                        data-src="assets/images/products/nakış-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="nakis.html">Nakış</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/örme-1.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/örme-1.jpg"
                        data-src="assets/images/products/örme-1.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="orme.html">Örme</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sp col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="product-item">
                <div class="product-image-action">
                  <div class="product-image">
                    <a
                      href="assets/images/products/baski-4.jpg"
                      data-lightbox="product-images"
                    >
                      <img
                        class="img-fluid blur-up lazyload"
                        src="assets/images/products/baski-4.jpg"
                        data-src="assets/images/products/baski-4.jpg"
                        alt="image"
                        title="image"
                      />
                    </a>
                  </div>
                </div>
                <div class="product-details">
                  <h3 class="product-title">
                    <a href="baskili.html">Baskılı</a>
                  </h3>
                  <h4 class="product-vendor"></h4>
                  <div class="product-starrating">
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                    <i class="spr-icon fa fa-star"></i>
                  </div>
                  <div class="product-price">
                    <span class="sale-price">$113.88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      </ReactOwlCarousel>
    </>
  );
}

export default ProductDetails;
