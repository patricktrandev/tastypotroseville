import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const Carousel = () => {
  return (
    <section>
      <div
        id="carouselTastyHotpot"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="container carousel-indicators">
          <li
            data-target="#carouselTastyHotpot"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselTastyHotpot" data-slide-to={1} />
          <li data-target="#carouselTastyHotpot" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="tastyHotPotCarousel__overlay" />
            <div className="container carousel-caption">
              <div className="col-10 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                <h1>Christmas Drink</h1>
                <p>New Christmas Drink</p>
                <div className="common-button">
                  <Link to="/promotion">
                    <span>Get new promotion!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="tastyHotPotCarousel__overlay" />
          </div>
          <div className="carousel-item">
            <div className="tastyHotPotCarousel__overlay" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselTastyHotpot"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            {" "}
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselTastyHotpot"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </section>
  );
};
