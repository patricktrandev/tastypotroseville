import React, { Fragment } from "react";
import { HeaderPromotion } from "./header/HeaderPromotion";
import { FooterMain } from "./footer/FooterMain";
const listPromo = [
  {
    name: "Spread The Soul of Christmas",
    description: "Happy Holidays from Tasty Pot",
    imgSrc: "happyholidys.png",
    name1: "Christmas 2023",
    description1: "Our Business",
    imgSrc1: "hourbusiness.png",
  },
  {
    name: "Happy Halloween",
    description: "Happy Halloween from Tasty Pot",
    imgSrc: "hotpot.png",
    name1: "Trick or Treat",
    description1: "Halloween Tasty Pot",
    imgSrc1: "hotpot2.png",
  },
];
export const Promotion = () => {
  return (
    <Fragment>
      <HeaderPromotion />
      <section className="promotion__tasty">
        <div className="promotion__tasty__title text-center">
          <p>PROMOTION</p>
          <h1>TASTY POT</h1>
        </div>
      </section>
      <section className="tasty__promotion section-spacing">
        <div className="container">
          {listPromo.map((item) => {
            return (
              <Fragment key={item.name}>
                <section class="tasty__promotion">
                  <div class="container">
                    <div class="row tasty__promotion__row">
                      <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__item">
                        <div class="promotion__tasty__title__content">
                          <div class="promotion__tasty__title__content_text">
                            <h1>{item.name}</h1>
                            <h3>{item.description}</h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 promotion__tasty__img">
                        <img src={`./image/${item.imgSrc}`} alt="rewardad" />
                      </div>
                    </div>
                    <div class="row tasty__promotion__row">
                      <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__img">
                        <img src={`./image/${item.imgSrc1}`} alt="rewardad" />
                      </div>
                      <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__item">
                        <div class="promotion__tasty__title__content">
                          <div class="promotion__tasty__title__content_text">
                            <h1>{item.name1}</h1>
                            <h3>{item.description1}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </Fragment>
            );
          })}
        </div>
      </section>

      <FooterMain />
    </Fragment>
  );
};
