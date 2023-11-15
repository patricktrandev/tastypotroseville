import React from "react";
import { Link } from "react-router-dom";
export const FooterMain = () => {
  return (
    <footer>
      <div className="tasty__top__footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tasty__top__footer__logo d-flex">
              <img src="/image/logo.png" alt="logo" />
              <div className="tasty__top__footer__address mx-4">
                <p>1020 Pleasant Grove, Ste 170, Roseville, CA95678</p>
                <p>(916) 896-1916</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tasty__top__footer__social">
              <span>
                <a href="https://www.instagram.com/tastypotroseville?igshid=MzMyNGUyNmU2YQ%3D%3D&fbclid=IwAR3hldirCM1c_h4AKRavY5nmJoZuUJDD0StxysesFJmAAyp-MThG1K_TA6Q">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span>
                <a href="https://www.yelp.com/biz/tasty-pot-roseville-roseville">
                  <i className="fa-brands fa-yelp"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="tasty__bottom__footer my-2">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <p>© Tasty Hot Pot 2023. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
