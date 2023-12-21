import React from "react";


function ProductSimilarTemizlik(props) {

  const { picture, title, nav } = props;

  return (
    <>
      <div className="album-list-item">
        <a className="ali-link" href={nav}>
          <div className="ali-img-wrap">
            <div
              className="ali-img bg-image"
              style={{
                backgroundImage: `url(${picture})`,
                backgroundPosition: "50% 50%",
              }}
            ></div>
          </div>
          <div className="ali-caption">
            <p className="ali-title">{title}</p>
            <div className="ali-meta"></div>
          </div>
        </a>
        <a className="ali-link-my" href={nav}>
          <p>{title}</p>
        </a>
      </div>
    </>
  );
}

export default ProductSimilarTemizlik;
