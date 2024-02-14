/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SimilarOne = (props) => {
  const { nav, picture, title } = props;

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
      <Link className="ali-link" onClick={handleClick} as={Link} to={nav}>
        <div className="ali-img-wrap">
          <div>
            <img
              className="img-fluid blur-up lazyload"
              src={picture}
              alt={title}
              title={title}
            />
          </div>
        </div>
        <div className="ali-caption">
          <p className="ali-title">{title}</p>
          <div className="ali-meta"></div>
        </div>
        <a className="ali-link-my" onClick={handleClick} as={Link} to={nav}>
          <p>{title}</p>
        </a>
      </Link>
    </>
  );
};

export default SimilarOne;
