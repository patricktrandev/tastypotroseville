import React, { Fragment } from "react";
import { StepContent } from "./StepContent";

export const Spicy = () => {
  return (
    <Fragment>
      <StepContent step={"STEP 2"} sub={"Choose a Spicy level"} />
      <section className="tasty__spicy">
        <div className="container">
          <div className="row my-3 text-center">
            <div className="col-xs-12 col-sm-12 col-lg tasty__spicy__list">
              <div className="tasty__spicy__level">
                <div className="tasty__spicy__level__item none">
                  <span className="tasty__spicy__icon">
                    <i className="fa-solid fa-pepper-hot" />
                    <i className="fa-solid fa-ban" />
                  </span>
                </div>
                <div className="tasty__spicy__text">
                  <p>NONE</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg tasty__spicy__list">
              <div className="tasty__spicy__level">
                <div className="tasty__spicy__level__item">
                  <span className="tasty__spicy__icon">
                    <i className="fa-solid fa-pepper-hot" />
                  </span>
                </div>
                <div className="tasty__spicy__text">
                  <p>MILD</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg tasty__spicy__list">
              <div className="tasty__spicy__level">
                <div className="tasty__spicy__level__item">
                  <span className="tasty__spicy__icon">
                    <i className="fa-solid fa-pepper-hot" />
                    <i className="fa-solid fa-pepper-hot" />
                  </span>
                </div>
                <div className="tasty__spicy__text">
                  <p>MEDIUM</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg tasty__spicy__list">
              <div className="tasty__spicy__level">
                <div className="tasty__spicy__level__item">
                  <span className="tasty__spicy__icon">
                    <i className="fa-solid fa-pepper-hot" />
                    <i className="fa-solid fa-pepper-hot" />
                    <i className="fa-solid fa-pepper-hot" />
                  </span>
                </div>
                <div className="tasty__spicy__text">
                  <p>SPICY</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg tasty__spicy__list">
              <div className="tasty__spicy__level">
                <div className="tasty__spicy__level__item">
                  <span className="tasty__spicy__icon">
                    <i className="fa-solid fa-pepper-hot" />
                    <i className="fa-solid fa-pepper-hot" />
                    <i className="fa-solid fa-pepper-hot" />
                    <i className="fa-solid fa-pepper-hot" />
                  </span>
                </div>
                <div className="tasty__spicy__text">
                  <p>FLAMING SPICY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
