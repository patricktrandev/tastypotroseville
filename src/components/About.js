import React, { Fragment } from "react";
import { FooterMain } from "./footer/FooterMain";
import { HeaderAbout } from "./header/HeaderAbout";

export const About = () => {
  return (
    <Fragment>
      <HeaderAbout />
      <section className="promotion__tasty ">
        <div className="promotion__tasty__title text-center">
          <p>ABOUT</p>
          <h1>TASTY POT</h1>
        </div>
        <div className="promotion__tasty__content">
          <div className="row text-center">
            <div className="promotion__tasty__content__title m-auto">
              <h3>OUR PLACE</h3>
              <h5>We just love Taiwanese Food!</h5>
              <div className="promotion__tasty__content__item">
                <p>
                  We are an authentic Taiwanese individual hotpot chain that
                  seeks to provide healthy dining in a comfortable, modern
                  setting. We believe that in order to live well, you must eat
                  well, including when you eat out. You don't have to sacrifice
                  health VS taste.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="promotion__tasty__content_ligth">
          <div className="row text-center">
            <div className="promotion__tasty__content__title  m-auto">
              <h3>OUR LITTLE FACTORY</h3>
              <h5>It's what's on the inside that counts</h5>
              <div className="promotion__tasty__content__item text-center">
                <p className="text-center">
                  Our boiling hotpot soups are purposefully designed to leverage
                  the natural taste of the various ingredients and are seasoned
                  with seasonings imported from Taiwan, real meat bones, and
                  cabbage. Each location is tastefully designed to provide a
                  comfortable dining experience. As such, we are the perfect
                  place for your dining needs from a romantic first date to a
                  bonding family dinner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container about__tasty">
        <div class="row about__tasty__content">
          <div class="col-12">
            <h4>Address and hour</h4>
            <p>
              <span class="mr-3">Address: </span> 1020 pleasant grove blvd #170,
              Roseville, CA 95678
            </p>
            <p>
              <span class="mr-3">Phone: </span> 916-749-4236
            </p>
            <p>
              <span class="mr-3">Monday – Sunday</span> 11:00am-10:00pm
            </p>
            <p>
              <span>Follow our Instagram </span>
            </p>
            <p>
              <span class="mr-2">
                {" "}
                <i class="fab fa-instagram"></i>{" "}
              </span>
              <a href="https://www.instagram.com/the.tastypot/">
                tastypotroseville
              </a>
            </p>
          </div>
        </div>
      </section>
      <FooterMain />
    </Fragment>
  );
};
