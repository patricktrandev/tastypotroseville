import React from "react";
import { Link } from "react-router-dom";
export const MenuItem = ({ imgUrl, name }) => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="row tastyMenu__hotpot__item m-3">
        <div className="col-12 col-sm-12 col-md-5 col-lg-6 col-xl-6 p-0">
          <div className="tastyMenu__hotpot__img">
            <img src={`${imgUrl}`} alt="tasty_hotpot_menu_1" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6">
          <div>
            <div className="tastyMenu__hotpot__content">
              <h3>{`${name}`}</h3>
              <h4>Hot Soup</h4>
              <p>
                <i className="fa fa-arrow-circle-right " />
                <span className="ml-3">
                  <Link to={`/menu/${name}`}>See What's Inside</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
