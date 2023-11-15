import React from "react";

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
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i>
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
              <p>
                <a href="mailto:TastyPotEG@gmail.com">TastyPotEG@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
