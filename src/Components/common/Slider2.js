import React, { useState } from "react";

function Slider2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className={activeIndex === 0 ? "active" : ""}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          className={activeIndex === 1 ? "active" : ""}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          className={activeIndex === 2 ? "active" : ""}
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <img
            className="d-block w-100 resimSlider"
            src="assets/images/1.-haber-scaled.jpg"
            alt="First slide"
            width="100%"
            height="500px"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <img
            className="d-block w-100 resimSlider"
            src="assets/images/pvpanel.png"
            alt="Second slide"
            width="100%"
            height="500px"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <img
            className="d-block w-100 resimSlider"
            src="assets/images/solar2.jpg"
            alt="Third slide"
            width="100%"
            height="500px"
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
        onClick={() => handleSelect(activeIndex === 0 ? 2 : activeIndex - 1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
        onClick={() => handleSelect(activeIndex === 2 ? 0 : activeIndex + 1)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider2;
