import React, { Fragment, useEffect, useState } from "react";
import { HeaderPromotion } from "./header/HeaderPromotion";
import { FooterMain } from "./footer/FooterMain";
import { Loader } from "./layout/Loader";
const listPromo = [
  {
    name: "Spread The Soul of Christmas",
    description: "Happy Holidays from Tasty Pot",
    imgSrc: "happyholidys.png",
  },
  {
    name: "Christmas 2023",
    description: "Hour Business",
    imgSrc: "hourbusiness.png",
  },
];
const delay = 1;

export const Promotion = () => {
  const [show, setShow] = useState(false);
  let count = 0;
  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <Fragment>
      {show ? (
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
              <section class="tasty__promotion my-3">
                <div class="container">
                  <div class="row tasty__promotion__row__new p-3 justify-content-center">
                    <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__item">
                      <div class="promotion__tasty__title__content">
                        <div class="promotion__tasty__title__content_text">
                          <h1>Christmas Drink</h1>
                          <h3>New Christmas Drink</h3>
                        </div>
                      </div>
                    </div>
                    <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 promotion__tasty__img">
                      <img src={`./image/new_drink.jpg`} alt="rewardad" />
                    </div>
                  </div>
                </div>
              </section>
              {listPromo.map((item) => {
                count += 1;
                return (
                  <Fragment key={item.name}>
                    <section class="tasty__promotion">
                      <div class="container">
                        <div
                          class={`row tasty__promotion__row__poster p-3 justify-content-center ${
                            count % 2 == 0 ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 tasty__promotion__item">
                            <div class="promotion__tasty__title__content">
                              <div class="promotion__tasty__title__content_text">
                                <h1>{item.name}</h1>
                                <h3>{item.description}</h3>
                              </div>
                            </div>
                          </div>
                          <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 promotion__tasty__img">
                            <img
                              src={`./image/${item.imgSrc}`}
                              alt="rewardad"
                            />
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
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};
