import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Intro = () => {
  return (
    <section className="container tastyHotpotIntro setion-spacing line-bottom-section">
      <div className="row">
        <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 tastyHotpotIntro__item">
          <div className="tastyHotpotIntro__title subtitle">
            <span>FOOD &amp; DRINKS</span>
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
        <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 tastyHotpotIntro__item">
          <div className="tastyHotpotIntro__title subtitle">
            <span>PROMOTION</span>
          </div>
          <p>Sign up and get VIP deals!</p>
          <div className="tastyHotpotIntro__button common-button">
            <Link to="/promotion">
              <span>See Now</span>
            </Link>
          </div>
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 tastyHotpotIntro__item">
          <div className="tastyHotpotIntro__title subtitle">
            <span>We enforce mask wearing and social distancing</span>
          </div>
          <p>
            Please be sure to wear your mask when you are in the shop except for
            when you are at your table. Thank you for your consideration!
          </p>
        </div>
      </div>
    </section>
  );
};
