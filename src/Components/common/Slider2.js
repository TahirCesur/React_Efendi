import React, { useState } from "react";

function Slider2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
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
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="3"
            className={activeIndex === 3 ? "active" : ""}
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
            <img
              className="d-block w-100 resimSlider"
              src="assets/images/slide1.webp"
              alt="First slide"
              width="100%"
              height="500px"
            />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
            <img
              className="d-block w-100 resimSlider"
              src="assets/images/bitkisel/slider-7.webp"
              alt="Second slide"
              width="100%"
              height="500px"
            />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
            <img
              className="d-block w-100 resimSlider"
              src="assets/images/bitkisel/slider-5.webp"
              alt="Third slide"
              width="100%"
              height="500px"
            />
          </div>
          <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
            <img
              className="d-block w-100 resimSlider"
              src="assets/images/bitkisel/slider-8.webp"
              alt="Fourth slide"
              width="100%"
              height="500px"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          alt="prev"
          aria-label="prev"
          onClick={() => handleSelect(activeIndex === 0 ? 3 : activeIndex - 1)}
        >
{/*           <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span> */}
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          alt="next"
          aria-label="next"
          onClick={() => handleSelect(activeIndex === 3 ? 0 : activeIndex + 1)}
        >
          {/* <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span> */}
        </a>
      </div>
    </>
  );
}

export default Slider2;
