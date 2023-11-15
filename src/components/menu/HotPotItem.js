import React from "react";
import { Link } from "react-router-dom";
export const HotPotItem = ({ imgUrl, name, descItem }) => {
  return (
    <section className="container hotpot__item">
      <div className="row my-3">
        <div className="col subtitle">
          <span>{name}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 hotpot__item__single">
          <div className="row hotpot__item__content m-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="hotpot__item__img">
                <img src={imgUrl} alt="tasty_hotpot_menu_1" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="hotpot__menu__item__content">
                <h3>{name}</h3>
                <h4>Hot Soup</h4>
                <p className="hotpot__menu__item__text">{descItem}</p>
                <p className="text-right text-primary">
                  <span className="mr-2">
                    <Link to="/menu">Back</Link>
                  </span>
                  <i className="fa fa-arrow-circle-right" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
