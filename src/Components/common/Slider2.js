import React, { useState } from "react";
import Spacer3 from "./Spacer3";


function Slider2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    handleSelect(activeIndex === 0 ? 9 : activeIndex - 1);
  };

  const handleNext = () => {
    handleSelect(activeIndex === 9 ? 0 : activeIndex + 1);
  };

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <ol className="carousel-indicators">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={activeIndex === index ? "active" : ""}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner resimSlider">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <div
              key={index}
              className={`carousel-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <img
                className="d-block w-100 resimSlider"
                src={`assets/images/slider/s-${index + 1}.webp`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          alt="prev"
          aria-label="prev"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          alt="next"
          aria-label="next"
          onClick={handleNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Slider2;
