/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import colorData from "../../../data/colors.json";

const ColorBlock = ({ colorData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={`color-block ${isHovered ? "hovered" : ""}`} style={{ backgroundColor: colorData.color }} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {isHovered && (
        <div className="image-container">
          <img src={colorData.imageSrc} alt={`Hovered Image ${colorData.id}`} />
        </div>
      )}
    </div>
  );
};

export default ColorBlock;
