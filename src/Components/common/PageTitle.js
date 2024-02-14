import { t } from "i18next";
import React from "react";

const PageTitle = (props) => {
    const {company, title}=props;
  return (
    <>
      <div className="col-md-12 wow fadeInUp" data-wow-delay="100ms">
        <div className="section-title text-center">
          <div className="section-title__triangle">
            <img
              src="assets/images/logo/fav-sekir.webp"
              alt="icon"
              aria-label="icon"
            />
          </div>
          <h5 className="section-title__tagline" style={{color:"#e44514"}}>
            {company}
          </h5>
          <h2 className="section-title__title">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
