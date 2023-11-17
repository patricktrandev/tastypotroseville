import React, { Fragment } from "react";
import { StepContent } from "./StepContent";

const listAddOns = [
  {
    price: "$5.50",
    dishes: [
      "Meatball",
      "Fishball",
      "Tempura",
      "Dumpling",
      "Imitation Crabmeat",
      "Pork Blood Rice Cake",
      "Fuzhou Fishball",
    ],
  },
  {
    price: "$6.95",
    dishes: ["Beef Slices", "Lamb Slices"],
  },
  {
    price: "$6.50",
    dishes: [
      "Pork Slices",
      "Pork Intestine",
      "Shrimp",
      "Roe Fishball",
      "Mini Sausages",
    ],
  },
  {
    price: "$4.50",
    dishes: [
      "Cabbage",
      "Napa",
      "Fresh Corn",
      "Soft Tofu",
      "Fried Tofu Skin",
      "Enoki Mushroom",
      "Lotus Root",
    ],
  },
  {
    price: "$3.25",
    dishes: ["Quail Egg", "Udon", "Instant Noodle"],
  },
  {
    price: "$2.50",
    dishes: ["Steamed Rice", "Vermicelli", "Egg"],
  },
];

export const AddOns = () => {
  return (
    <Fragment>
      <section className="tasty__drinks section-spacing container">
        <div className="tasty__drinks__overlay" />
        <div className="text-center">
          <div className="drink__tasty__acha line-bottom-title">
            <p className="my-3">Add Ons</p>
            <div className="tastyMenu__hotpot__caption my-3">
              <p>Choose Your Add Ons</p>
            </div>
          </div>
        </div>
        <div className="row tasty__drinks_list">
          {listAddOns.map((element) => {
            return (
              <div className="col-xs-12 col-sm-12 col-lg-4">
                <div className="row tasty__drinks_list__item">
                  <div className="col-4 tasty__drinks_list__item__title">
                    <h4 className="rotate">{element.price}</h4>
                  </div>
                  <div className="col-8">
                    <ul>
                      {element.dishes?.map((item) => {
                        return (
                          <li>
                            <span> {item} </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};
