import React, { Fragment } from "react";
import { HeaderMain } from "./header/HeaderMain";
import { Carousel } from "./layout/Carousel";
import { Intro } from "./layout/Intro";
import { Promotion } from "./layout/Promotion";
import { FooterMain } from "./footer/FooterMain";

export const Home = () => {
  return (
    <Fragment>
      <HeaderMain />
      <Carousel />
      <Intro />
      <Promotion />
      <FooterMain />
    </Fragment>
  );
};
