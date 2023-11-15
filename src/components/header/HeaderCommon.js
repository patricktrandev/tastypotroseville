import React from "react";
import { Link } from "react-router-dom";
export const HeaderCommon = () => {
  return (
    <section id="headerCommon">
      <nav className="tastyhotPotNav container navbar navbar-expand-md">
        <Link className="navbar-brand" to="/">
          <img className="logo-img" src="/image/logo_tasty.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#tastyHotPotNavBar"
          aria-controls="tastyHotPotNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-align-right" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="tastyHotPotNavBar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item line">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item line active">
              <Link to="/menu" className="nav-link">
                MENU
              </Link>
            </li>
            <li className="nav-item line">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item line">
              <Link to="/promotion" className="nav-link">
                PROMOTION
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
