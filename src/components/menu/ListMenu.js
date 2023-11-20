import React, { Fragment } from "react";
import { MenuItem } from "./MenuItem";
import { StepContent } from "./StepContent";

const listMenu = [
  {
    imageUrl: "/image/1.png",
    name: "Beef Hot Soup",
    description:
      "Napa Cabbage, Beef Slices, Vermicelli, Enoki Mushroom, Taro, Tomato, Frozen Tofu, Tempura, Corn, Meatball, Kamaboko, Fried Tofu Skin, Imitation Crabmeat, Fish Cake, Clam, Cilantro, Scallion",
  },
  {
    imageUrl: "/image/2.png",
    name: "Lamb Hot Soup",
    description:
      "Napa Cabbage, Lamb Slices, Vermicelli, Enoki Mushroom, Imitation Crabmeat, Meatball, Fish Cake, Kamaboko, Pork Blood Rice Cake, Fried Tofu Skin, Clam, Sour Mustard, Brown Beech Mushroom, Frozen Tofu, Cilantro",
  },
  {
    imageUrl: "/image/3.png",
    name: "Cheesy Milk Hot Soup",
    description:
      "Taiwanese Cabbage, Pork Slices, Vermicelli, Mini Sausage, Enoki Mushroom, Tomato, Corn, Broccoli, King Oyster Mushroom, Quail Egg, Cheese, Bamboo Shoot, Soft Tofu, Imitation Crabmeat, Fish Fillet, Fish Tofu, Kamaboko",
  },
  {
    imageUrl: "/image/4.png",
    name: "Curry Flavor Hot Soup",
    description:
      "Napa Cabbage, Pork Slices, Vermicelli, Tomato, Corn, Egg, Enoki Mushroom, Imitation Crabmeat, Kamaboko, Fishball, Fried Tofu Skin, Tempura, Chinese String Bean, Golden Fishball,King Oyster Mushroom, Eggie Fish Ball, Lobster Ball, Scallion",
  },
  {
    imageUrl: "/image/5.png",
    name: "Tomato Hot Soup",
    description:
      "Frozen Tofu, Mussel, Shrimp, Corn, Roe Fishball, Tomato, Kamaboko, Clam, Tempura, Fishball, Quail Egg, Brocoli, Oyster Mushroom, Enoki Mushroom, Korean Ricecake",
  },
  {
    imageUrl: "/image/6.png",
    name: "Healthy Veggie Hot Soup",
    description:
      "Taiwanese Cabbage, Vermicelli, Enoki Mushroom, Tomato, Corn, Lotus Root, Fried Tofu Skin, Chinese String Bean, King Oyster Mushroom, Broccoli, Seaweed Knot, Brown Beech Mushroom, Taro, Bamboo Shoots, Soft Tofu, Zucchini, Black Mushroom",
  },
  {
    imageUrl: "/image/7.png",
    name: "Kimchi Dumpling Hot Soup",
    description:
      "Taiwanese Cabbage, Pork Slices, Kimchi, Dumpling, Vermicelli, Mini Sausage, Shrimp, Enoki Mushroom, Kamaboko, Tempura, Clam, Fuzhou Fishball, Soft Tofu, Fried Tofu Skin, Zucchini, Imitation Crabmeat, Egg, Scallion",
  },
  {
    imageUrl: "/image/8.png",
    name: "Thai Flavor Hot Soup",
    description:
      "Taiwanese Cabbage, Pork Slices, Taro Stem, Enoki Mushroom, Brown Beech Mushroom, Vermicelli, Cuttlefish Ring, Fuzhou Fishball, Clam, Crab, Baby Octopus, Mussel, Shrimp, Tempura, Meatball, Imitation Crabmeat, Cilantro",
  },
  {
    imageUrl: "/image/9.png",
    name: "Taiwanese Spicy Hot Soup",
    description:
      "Taiwanese Cabbage, Instant Noodle, Beef Slices, Beef Tendon, Enoki Mushroom, Tempera, Clam, Fuzhou Fishball, Cuttlefish Ring, Pork Blood Rice Cake, Pork Intestine, Fried Tofu Skin, Brown Beech Mushroom, Frozen Tofu, Imitation Crabmeat, Meatball, Sour Mustard, Fried Tofu Puff, Cilantro, Scallion",
  },
  {
    imageUrl: "/image/10.png",
    name: "Japanese Miso Hot Soup",
    description:
      "Taiwanese Cabbage, Pork Slices, Crab, Udon, Enoki Mushroom, Clam, Fish Fillet, King Oyster Mushroom, Fried Tofu Skin, Soft Tofu, Kamaboko, Cuttlefish Ring, Corn, Tempura, Roe Fishball, Seaweed Knot, Zucchini, Fuzhou Fishball, Egg, Scallion",
  },
  {
    imageUrl: "/image/11.png",
    name: "Sichuan Flavor Hot Soup",
    description:
      "Napa, Beef Slices, Fish Fillet, Clam, Pork Aorta, Imitation Crabmeat, Tempura, Fishball, Guangtang Beef Ball, Zucchini, Enoki Mushroom, Black Mushroom, Potato Slices, Frozen Tofu, Fried Tofu Puff, Fried Tofu Skin, Vermicelli, Scallion",
  },
  {
    imageUrl: "/image/12.png",
    name: "Seafood Lobster Hot Soup",
    description:
      "Napa Cabbage, Lobster, Soft Tofu, Vermicelli, Enoki Mushroom, Seaweed Knot, Brown Beech Mushroom, Zucchini, Black Mushroom, King Oyster Mushroom, Taro, Shrimp, Fish Fillet, Mussel, Baby Octopus, Clam, Cuttlefish Ring, Eggie Fish Ball, Lobster Ball, Kamaboko, Scallion",
  },
];

export const ListMenu = () => {
  return (
    <section>
      <div className="container tastyMenu__hotpot">
        <div className="row my-3">
          <div className="col subtitle">
            <span>our menu</span>
          </div>
        </div>
        <div className="row tastyMenu__hotpot__caption">
          <p>Eat Healthy, Live Well</p>
        </div>
        <StepContent step={"STEP 1"} sub={"Choose Your Pot"} />
        <div className="tastyMenu__hotpot__list">
          <div className="row">
            {listMenu.map((hp) => {
              let imgUrl = (hp?.imageUrl).toString();
              let name = hp?.name;
              let descItem = hp?.description;
              return (
                <Fragment key={imgUrl}>
                  <MenuItem imgUrl={imgUrl} name={name} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
