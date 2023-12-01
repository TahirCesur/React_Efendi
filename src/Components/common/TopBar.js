/* eslint-disable no-unused-vars */
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
          className="topbar fixed-top sticky-top"
          style={{ backgroundColor: "#1c3844", padding: "10px" }}
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
  );
};

export default TopBar;

//* d-none d-md-inline yapma nedenimiz küçük ekranda
//* kaybolsunlar diye ve block olursa aşağı iner diye inline yaptık

//? d-none d-md-block yapma nedenimiz küçük ekranda kaybolsunlar diye yapmış olduk...
