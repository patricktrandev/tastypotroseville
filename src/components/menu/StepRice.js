import React, { Fragment } from "react";
import { StepContent } from "./StepContent";

export const StepRice = () => {
  return (
    <Fragment>
      <div className="text-center">
        <div className="tastyMenu__hotpot_step line-bottom-title">
          <p className="my-3">STEP 3</p>
          <div className="tastyMenu__hotpot__caption my-3">
            <p className="my-0">Choose</p>
            <p>Your Rice or Vermicelli</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="tasty__step__rice text-center">
            <img
              src="./image/choosericeorvermicelli.png"
              alt="choosericeorvermicelli.png"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
