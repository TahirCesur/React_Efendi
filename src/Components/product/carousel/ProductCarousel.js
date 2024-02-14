/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";

const ProductCarousel = (props) => {
  const {
    title1,
    title2,
    title3,
    nav1,
    nav2,
    nav3,
    picture1,
    picture2,
    picture3,
    title4,
    title5,
    title6,
    nav4,
    nav5,
    nav6,
    picture4,
    picture5,
    picture6,
  } = props;

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
          <Link className="ali-link" onClick={handleClick} as={Link} to={nav1}>
            <div className="ali-img-wrap">
              <div>
                <img
                  className="img-fluid blur-up lazyload"
                  src={picture1}
                  alt={title1}
                  title={title1}
                />
              </div>
            </div>
            <div className="ali-caption">
              <p className="ali-title">{title1}</p>
              <div className="ali-meta"></div>
            </div>
          </Link>
          <Link
            className="ali-link-my"
            onClick={handleClick}
            as={Link}
            to={nav1}
          >
            <p>{title1}</p>
          </Link>
        </div>

        <div className="album-list-item">
          <Link className="ali-link" onClick={handleClick} as={Link} to={nav2}>
            <div className="ali-img-wrap">
              <div>
                <img
                  className="img-fluid blur-up lazyload"
                  src={picture2}
                  alt={title2}
                  title={title2}
                />
              </div>
            </div>
            <div className="ali-caption">
              <p className="ali-title">{title2}</p>
              <div className="ali-meta"></div>
            </div>
          </Link>
          <Link
            className="ali-link-my"
            onClick={handleClick}
            as={Link}
            to={nav2}
          >
            <p>{title2}</p>
          </Link>
        </div>

        <div className="album-list-item">
          <Link className="ali-link" onClick={handleClick} as={Link} to={nav3}>
            <div className="ali-img-wrap">
              <div>
                <img
                  className="img-fluid blur-up lazyload"
                  src={picture3}
                  alt={title3}
                  title={title3}
                />
              </div>
            </div>
            <div className="ali-caption">
              <p className="ali-title">{title3}</p>
              <div className="ali-meta"></div>
            </div>
          </Link>
          <Link
            className="ali-link-my"
            onClick={handleClick}
            as={Link}
            to={nav3}
          >
            <p>{title3}</p>
          </Link>
        </div>

        <div className="album-list-item">
          <Link className="ali-link" onClick={handleClick} as={Link} to={nav4}>
            <div className="ali-img-wrap">
              <div>
                <img
                  className="img-fluid blur-up lazyload"
                  src={picture4}
                  alt={title4}
                  title={title4}
                />
              </div>
            </div>
            <div className="ali-caption">
              <p className="ali-title">{title4}</p>
              <div className="ali-meta"></div>
            </div>
          </Link>
          <Link
            className="ali-link-my"
            onClick={handleClick}
            as={Link}
            to={nav4}
          >
            <p>{title4}</p>
          </Link>
        </div>

        <div className="album-list-item">
          <Link className="ali-link" onClick={handleClick} as={Link} to={nav5}>
            <div className="ali-img-wrap">
              <div>
                <img
                  className="img-fluid blur-up lazyload"
                  src={picture5}
                  alt={title5}
                  title={title5}
                />
              </div>
            </div>
            <div className="ali-caption">
              <p className="ali-title">{title5}</p>
              <div className="ali-meta"></div>
            </div>
          </Link>
          <Link
            className="ali-link-my"
            onClick={handleClick}
            as={Link}
            to={nav5}
          >
            <p>{title5}</p>
          </Link>
        </div>

        <div className="album-list-item">
          <Link className="ali-link" onClick={handleClick} as={Link} to={nav6}>
            <div className="ali-img-wrap">
              <div>
                <img
                  className="img-fluid blur-up lazyload"
                  src={picture6}
                  alt={title6}
                  title={title6}
                />
              </div>
            </div>
            <div className="ali-caption">
              <p className="ali-title">{title6}</p>
              <div className="ali-meta"></div>
            </div>
          </Link>
          <Link
            className="ali-link-my"
            onClick={handleClick}
            as={Link}
            to={nav6}
          >
            <p>{title6}</p>
          </Link>
        </div>
      </ReactOwlCarousel>
    </>
  );
};

export default ProductCarousel;
