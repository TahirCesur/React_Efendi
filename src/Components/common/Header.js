/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [showSubMenu, setShowSubMenu] = useState(false); // Alt menünün görünürlüğünü saklar

  const handleMouseEnter = () => {
    setShowSubMenu(true); // Mouse üstüne geldiğinde alt menüyü göster
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false); // Mouse menünün üstünden çıktığında alt menüyü gizle
  };

  return (
    <>
      <header className="main-header sticky-top fixed-top">
        <div
          className="topbar fixed-top sticky-top mb-1"
          style={{ backgroundColor: "#1c3844", padding: "7px" }}
        >
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span className="topbar__wrapper">
                  <ul className="list-unstyled topbar__list">
                    <li>
                      <span className="fas fa-envelope"></span>
                      <a href="mailto:info@yenidunyaendustriyel.com">
                        info@yenidunyaendustriyel.com
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="d-flex">
                <Button
                  style={{
                    backgroundColor: "#369159",
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
                    backgroundColor: "#369159",
                    padding: "3px 7px 3px 7px",
                    fontSize: "13px",
                  }}
                  onClick={() => changeLanguage("en")}
                >
                  {t("EN")}
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="main-menu"
          expanded={expanded}
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to="/" className="main-menu__logo" onClick={handleClick}>
                <img
                  src="assets/images/logo.webp"
                  alt="Yenidünya Endüstriyel Tedarik Logo"
                />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle
              onClick={toggleNav}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse
              expanded={expanded}
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav className="ms-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={handleClick}
                  className="nav-link scrollto active"
                >
                  {t("ANASAYFA")}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Aboutus"
                  className="nav-link scrollto"
                  onClick={handleClick}
                >
                  {t("HAKKIMIZDA")}
                </Nav.Link>

                <NavDropdown
                  title={t("ÜRÜNLERİMİZ")}
                  id="collasible-nav-dropdown"
                  className="nav-link scroolto"
                  onMouseEnter={handleMouseEnter} // Mouse üstüne gelince alt menüyü göster
                  onMouseLeave={handleMouseLeave} // Mouse menünün üstünden çıkınca alt menüyü gizle
                  show={showSubMenu} //
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/EndustriyelTemizlik"
                    onClick={handleClick}
                  >
                    {t("Endüstrİyel TemİZLİk")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/EndustriyelMutfak"
                    onClick={handleClick}
                  >
                    {t("Endüstrİyel Mutfak")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/EndustriyelKagit"
                    onClick={handleClick}
                  >
                    {t("Endüstrİyel Kağıt")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/KozmetikUrunleri"
                    onClick={handleClick}
                  >
                    {t("Kozmetİk Ürünlerİ")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/BitkiselUrunler"
                    onClick={handleClick}
                  >
                    {t("BİTKİSEL Ürünler")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Ambalaj"
                    onClick={handleClick}
                  >
                    {t("AMBALAJ")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Gida" onClick={handleClick}>
                    {t("Gıda")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/Contactus"
                  className="nav-link scrollto"
                  onClick={handleClick}
                >
                  {t("İLETİŞİM")}
                </Nav.Link>
                {/* <Nav.Link
                  href="https://wa.me/905321621647"
                  title={t("Bize Whatsapptan Ulaşın")}
                  target={"_blank"}
                  className="social-links"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{ fontSize: "24px" }}
                  ></i>
                </Nav.Link> */}
              </Nav>
              <div class="main-menu__right">
                <a href="tel:+02242234234" class="main-menu__phone">
                  <i class="icon-telephone"></i>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="main-menu__phone"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/yenidunyaendustriyel/"
                  target="_blank"
                  class="main-menu__phone"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <hr style={{ marginTop: "121px", border:"2px solid #1c3844" }} />
        <hr style={{ marginTop: "-18px", border:"2px solid #369159" }} /> */}
      </header>
    </>
  );
}

export default Header;
