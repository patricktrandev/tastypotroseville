import React, { Fragment } from "react";

import { ColorRing } from "react-loader-spinner";
import { HeaderCommon } from "../header/HeaderCommon";
export const Loader = () => {
  return (
    <Fragment>
      <HeaderCommon />
      <div className="container text-center">
        <div className="loader__tasty">
          <ColorRing
            visible={true}
            height="200"
            width="200"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      </div>
    </Fragment>
  );
};
