import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Intro = () => {
  return (
    <section className="container tastyHotpotIntro setion-spacing line-bottom-section">
      <div className="row">
        <div className="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 tastyHotpotIntro__item">
          <div className="tastyHotpotIntro__title subtitle">
            <span>TASTY HOT POT</span>
          </div>
          <p>
            Our soup is hot and loaded with fresh ingredients, comes with a wide
            variety of options to satisfy your specific tastebuds! Come check
            out our menu!!
          </p>
          <div className="tastyHotpotIntro__button common-button">
            <Link to="/menu">
              <span>Menu</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
