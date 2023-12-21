/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleClick = (event) => {
    // Eğer tıklanan element bir alt menü öğesi ise menüyü kapatma
    if (event.target.closest(".dropdown-submenu")) {
      return;
    }

    window.scrollTo(0, 0);
    setExpanded(false);
    setShowSubMenu(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <>
      <header className="header">
        <div className="container-fluid full-header top-header">
          <div className="topbar-Header justify-content-between align-items-center">
            <div className="row">
              <div className="col-2 col-sm-3 col-md-4">
                <p
                  className="m-0"
                  style={{
                    textTransform: "lowercase",
                    color: "#000",
                    paddingLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  <i
                    className="fas fa-envelope"
                    style={{
                      textTransform: "lowercase",
                      color: "#000",
                      paddingLeft: "20px",
                      marginTop: "10px",
                    }}
                  >
                    &nbsp;
                    <span
                      style={{
                        color: "#161617",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                      }}
                    >
                      info@efendioglutekstil.com
                    </span>
                  </i>
                </p>
              </div>
              <div className="col col-md-4 text-center d-none d-md-block">
                <p className="m-0" style={{ textTransform: "lowercase" }}></p>
              </div>
              <div className="col-10 col-sm-9 col-md-4 pl-0 text-right">
                <div className="search-box float-right pr-lg-4">
                  <div className="d-flex">
                    <Button
                      style={{
                        backgroundColor: "#000",
                        color: "#bfa867",
                        padding: "3px 7px 3px 7px",
                        fontSize: "13px",
                      }}
                      onClick={() => changeLanguage("tr")}
                    >
                      {t("TR")}
                    </Button>
                    &nbsp;
                    <Button
                      style={{
                        backgroundColor: "#000",
                        color: "#bfa867",
                        padding: "3px 7px 3px 7px",
                        fontSize: "13px",
                      }}
                      onClick={() => changeLanguage("en")}
                    >
                      {t("EN")}
                    </Button>
                    &nbsp;
                    <Button
                      style={{
                        backgroundColor: "#000",
                        color: "#bfa867",
                        padding: "3px 7px 3px 7px",
                        fontSize: "13px",
                      }}
                      onClick={() => changeLanguage("ar")}
                    >
                      {t("AR")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid full-header main-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-6 col-md-6 col-lg-2 navbar-brand logo p-0 m-0">
              <Link as={Link} to="/" className="logo-img">
                <img
                  className="img-fluid justify-content-center mb-2"
                  src="assets/images/logo/prusa-logo.png"
                  alt="logo"
                  title="Prusa"
                />
              </Link>
            </div>

            <nav className="navigation navbar  navbar-expand-lg p-0 col-lg-8">
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setExpanded(!expanded)}
              >
                <span className="icon ti-menu"></span>
              </button>
              <div
                className={`navbar-collapse collapse dual-nav ${
                  expanded ? "show" : ""
                }`}
              >
                <a
                  href="#"
                  className="closeNav-btn d-lg-none clearfix"
                  id="closeNav"
                  title="Close"
                  onClick={handleClick}
                >
                  <span className="menu-close mr-2">Kapat</span>
                  <i className="ti-close" aria-hidden="true"></i>
                </a>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/"
                      onClick={handleClick}
                    >
                      Anasayfa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/Aboutus"
                      onClick={handleClick}
                    >
                      Hakkımızda
                    </Link>
                  </li>
                  <NavDropdown
                    title="Ürünlerimiz"
                    id="basic-nav-dropdown"
                    show={showSubMenu}
                    onToggle={(isOpen) => setShowSubMenu(isOpen)}
                  >
                    <li
                      className={`nav-item dropdown ${
                        showSubMenu ? "show" : ""
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <li>
                        <Link
                          className="nav-link"
                          as={Link}
                          to="/Armur"
                          onClick={(event) => handleClick(event)}
                        >
                          Armür Perde
                        </Link>
                      </li>
                      <Link
                        className="nav-link"
                        as={Link}
                        to="/Fonluk"
                        onClick={(event) => handleClick(event)}
                      >
                        Fonluk
                      </Link>

                      <Link
                        className="nav-link"
                        as={Link}
                        to="/Brode"
                        onClick={(event) => handleClick(event)}
                      >
                        Brode Perde
                      </Link>

                      <Link
                        className="nav-link"
                        as={Link}
                        to="/Nakis"
                        onClick={handleClick}
                      >
                        Nakış Perde
                      </Link>

                      <Link
                        className="nav-link"
                        as={Link}
                        to="/Orme"
                        onClick={(event) => handleClick(event)}
                      >
                        Örme Perde
                      </Link>

                      <Link
                        className="nav-link"
                        as={Link}
                        to="/Baskili"
                        onClick={(event) => handleClick(event)}
                      >
                        Baskılı Ürünler
                      </Link>
                    </li>
                  </NavDropdown>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/Galeri"
                      onClick={handleClick}
                    >
                      Galeri
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/Contact"
                      onClick={handleClick}
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="col-6 col-md-6 col-lg-2 p-4 right-side">
              <div className="search-box float-right">
                <a
                  href="#"
                  title="Search"
                  className="search-open search-toggle"
                  data-toggle="modal"
                  data-target="#instagram"
                >
                  <i className="icon ti-instagram"></i>
                </a>
              </div>

              <div className="search-box float-right">
                <a
                  href="#"
                  title="Search"
                  className="search-open search-toggle"
                  data-toggle="modal"
                  data-target="#facebook"
                >
                  <i className="icon ti-facebook"></i>
                </a>
              </div>

              <div className="search-box float-right">
                <a
                  href="tel:+902242115726"
                  title="Search"
                  className="search-open search-toggle"
                >
                  <i
                    className="icon fa fa-phone justify-content-center"
                    style={{ fontSize: "26px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
