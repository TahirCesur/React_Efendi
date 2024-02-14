import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
      <Container>
        <Row>
          <Col md={"3"}>
            <nav class="nav-side-menu">
              <div class="brand">Site Logo</div>
              <i
                class="fa fa-bars fa-2x toggle-btn"
                data-toggle="collapse"
                data-target="#menu-content"
              ></i>
              <div class="menu-list">
                <ul id="menu-content" class="menu-content collapse out">
                  <li>
                    <Link as={Link} to="/Nakis">
                      <i class="fa fa-fw fa-arrow-right fa-lg"></i>Dashboard
                    </Link>
                  </li>
                  <li
                    data-toggle="collapse"
                    data-target="#products"
                    class="collapsed"
                    data-parent="#menu-content"
                  >
                    <a href="#">
                      <i class="fa fa-fw fa-gift fa-lg"></i>UI Elements
                      <i class="fa fa-chevron-down"></i>
                    </a>
                  </li>
                  <ul class="sub-menu collapse" id="products">
                    <li class="active">
                      <a href="#">CSS3 Animation</a>
                    </li>
                    <li>
                      <a href="#">General</a>
                    </li>
                    <li>
                      <a href="#">Buttons</a>
                    </li>
                    <li>
                      <a href="#">Tabs & Accordions</a>
                    </li>
                    <li>
                      <a href="#">Typography</a>
                    </li>
                    <li>
                      <a href="#">FontAwesome</a>
                    </li>
                    <li>
                      <a href="#">Slider</a>
                    </li>
                    <li>
                      <a href="#">Panels</a>
                    </li>
                    <li>
                      <a href="#">Widgets</a>
                    </li>
                    <li>
                      <a href="#">Bootstrap Model</a>
                    </li>
                  </ul>
                  <li
                    data-toggle="collapse"
                    data-target="#service"
                    class="collapsed"
                    data-parent="#menu-content"
                  >
                    <a href="#">
                      <i class="fa fa-fw fa-table fa-lg"></i>Reports
                      <i class="fa fa-chevron-down"></i>
                    </a>
                  </li>
                  <ul class="sub-menu collapse" id="service">
                    <li>
                      <a href="#">Report 1</a>
                    </li>
                    <li>
                      <a href="#">Report 2</a>
                    </li>
                    <li>
                      <a href="#">Report 3</a>
                    </li>
                  </ul>
                  <li
                    data-toggle="collapse"
                    data-target="#new"
                    class="collapsed"
                    data-parent="#menu-content"
                  >
                    <a href="#">
                      <i class="fa fa-fw fa-users fa-lg"></i>Groups
                      <i class="fa fa-chevron-down"></i>
                    </a>
                  </li>
                  <ul class="sub-menu collapse" id="new">
                    <li>
                      <a href="#">New 1</a>
                    </li>
                    <li>
                      <a href="#">New 2</a>
                    </li>
                    <li>
                      <a href="#">New 3</a>
                    </li>
                  </ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-fw fa-calendar-o fa-lg"></i>Events
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-fw fa-user fa-lg"></i>Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-fw fa-users fa-lg"></i>People
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i class="fa fa-fw fa-cog fa-lg"></i>System{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;
