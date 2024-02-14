/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";

const ProductCarouselOne = (props) => {
  const {title1,nav1,picture1}=props;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    handleSelect(activeIndex === 0 ? 5 : activeIndex - 1);
  };

  const handleNext = () => {
    handleSelect(activeIndex === 5 ? 0 : activeIndex + 1);
  };

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
      <ReactOwlCarousel
        className="owl-carousel dots-rounded dots-outside nav-rounded nav-outside margin-top-30 margin-bottom-30"
        items={1}
        margin={20}
        nav
        dots={false}
      >
        <div className="album-list-item">
          <Link
            className="ali-link"
            onClick={handleClick}
            as={Link}
            to={nav1}
          >
            <div className="ali-img-wrap">
              <div>
                <img
                  className="img-fluid blur-up lazyload"
                  src={picture1}
                  alt={t(title1)}
                  title={t(title1)}
                />
              </div>
            </div>
            <div className="ali-caption">
              <p className="ali-title">{t(title1)}</p>
              <div className="ali-meta"></div>
            </div>
          </Link>
          <Link
            className="ali-link-my"
            onClick={handleClick}
            as={Link}
            to={nav1}
          >
            <p>{t(title1)}</p>
          </Link>
        </div>

      </ReactOwlCarousel>
    </>
  );
};

export default ProductCarouselOne;
