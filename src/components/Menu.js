import React, { Fragment, useEffect, useState } from "react";
import { HeaderCommon } from "./header/HeaderCommon";
import { ListMenu } from "./menu/ListMenu";
import { Spicy } from "./menu/Spicy";
import { AddOns } from "./menu/AddOns";
import { DrinkACha } from "./menu/DrinkACha";
import { FooterMain } from "./footer/FooterMain";
import { Loader } from "./layout/Loader";
const delay = 2;
export const Menu = () => {
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
          <HeaderCommon />

          <ListMenu />
          <Spicy />
          <AddOns />
          <DrinkACha />
          <FooterMain />
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};
