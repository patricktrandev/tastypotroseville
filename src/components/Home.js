import React, { Fragment, useEffect, useState } from "react";
import { HeaderMain } from "./header/HeaderMain";
import { Carousel } from "./layout/Carousel";
import { Intro } from "./layout/Intro";
import { Promotion } from "./layout/Promotion";
import { FooterMain } from "./footer/FooterMain";
import { Loader } from "./layout/Loader";

const delay = 1;
export const Home = () => {
  const [show, setShow] = useState(false);

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
          <HeaderMain />
          <Carousel />
          <Intro />
          <Promotion />
          <FooterMain />
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};
