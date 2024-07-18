import React, { Fragment } from "react";
import { MenuItem } from "./MenuItem";
import { StepContent } from "./StepContent";

const listMenu = [
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248541/tastypot_roseville/1_l7j8dh.png",
    name: "Beef Hot Soup",
    description:
      "Napa Cabbage, Beef Slices, Vermicelli, Enoki Mushroom, Taro, Tomato, Frozen Tofu, Tempura, Corn, Meatball, Kamaboko, Fried Tofu Skin, Imitation Crabmeat, Fish Cake, Clam, Cilantro, Scallion",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248543/tastypot_roseville/2_zo0vrp.png",
    name: "Lamb Hot Soup",
    description:
      "Napa Cabbage, Lamb Slices, Vermicelli, Enoki Mushroom, Imitation Crabmeat, Meatball, Fish Cake, Kamaboko, Pork Blood Rice Cake, Fried Tofu Skin, Clam, Sour Mustard, Brown Beech Mushroom, Frozen Tofu, Cilantro",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248547/tastypot_roseville/3_mnvv9e.png",
    name: "Cheesy Milk Hot Soup",
    description:
      "Taiwanese Cabbage, Pork Slices, Vermicelli, Mini Sausage, Enoki Mushroom, Tomato, Corn, Broccoli, King Oyster Mushroom, Quail Egg, Cheese, Bamboo Shoot, Soft Tofu, Imitation Crabmeat, Fish Fillet, Fish Tofu, Kamaboko",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248543/tastypot_roseville/4_kdanix.png",
    name: "Curry Flavor Hot Soup",
    description:
      "Napa Cabbage, Pork Slices, Vermicelli, Tomato, Corn, Egg, Enoki Mushroom, Imitation Crabmeat, Kamaboko, Fishball, Fried Tofu Skin, Tempura, Chinese String Bean, Golden Fishball,King Oyster Mushroom, Eggie Fish Ball, Lobster Ball, Scallion",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248555/tastypot_roseville/5_uqlpb5.png",
    name: "Tomato Hot Soup",
    description:
      "Frozen Tofu, Mussel, Shrimp, Corn, Roe Fishball, Tomato, Kamaboko, Clam, Tempura, Fishball, Quail Egg, Brocoli, Oyster Mushroom, Enoki Mushroom, Korean Ricecake",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248544/tastypot_roseville/6_frjm40.png",
    name: "Healthy Veggie Hot Soup",
    description:
      "Taiwanese Cabbage, Vermicelli, Enoki Mushroom, Tomato, Corn, Lotus Root, Fried Tofu Skin, Chinese String Bean, King Oyster Mushroom, Broccoli, Seaweed Knot, Brown Beech Mushroom, Taro, Bamboo Shoots, Soft Tofu, Zucchini, Black Mushroom",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248546/tastypot_roseville/7_fnvilk.png",
    name: "Kimchi Dumpling Hot Soup",
    description:
      "Taiwanese Cabbage, Pork Slices, Kimchi, Dumpling, Vermicelli, Mini Sausage, Shrimp, Enoki Mushroom, Kamaboko, Tempura, Clam, Fuzhou Fishball, Soft Tofu, Fried Tofu Skin, Zucchini, Imitation Crabmeat, Egg, Scallion",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248545/tastypot_roseville/8_fxxdwf.png",
    name: "Thai Flavor Hot Soup",
    description:
      "Taiwanese Cabbage, Pork Slices, Taro Stem, Enoki Mushroom, Brown Beech Mushroom, Vermicelli, Cuttlefish Ring, Fuzhou Fishball, Clam, Crab, Baby Octopus, Mussel, Shrimp, Tempura, Meatball, Imitation Crabmeat, Cilantro",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248548/tastypot_roseville/9_f7k5sv.png",
    name: "Taiwanese Spicy Hot Soup",
    description:
      "Taiwanese Cabbage, Instant Noodle, Beef Slices, Beef Tendon, Enoki Mushroom, Tempera, Clam, Fuzhou Fishball, Cuttlefish Ring, Pork Blood Rice Cake, Pork Intestine, Fried Tofu Skin, Brown Beech Mushroom, Frozen Tofu, Imitation Crabmeat, Meatball, Sour Mustard, Fried Tofu Puff, Cilantro, Scallion",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248551/tastypot_roseville/10_nvm4bl.png",
    name: "Japanese Miso Hot Soup",
    description:
      "Taiwanese Cabbage, Pork Slices, Crab, Udon, Enoki Mushroom, Clam, Fish Fillet, King Oyster Mushroom, Fried Tofu Skin, Soft Tofu, Kamaboko, Cuttlefish Ring, Corn, Tempura, Roe Fishball, Seaweed Knot, Zucchini, Fuzhou Fishball, Egg, Scallion",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248562/tastypot_roseville/11_escart.png",
    name: "Sichuan Flavor Hot Soup",
    description:
      "Napa, Beef Slices, Fish Fillet, Clam, Pork Aorta, Imitation Crabmeat, Tempura, Fishball, Guangtang Beef Ball, Zucchini, Enoki Mushroom, Black Mushroom, Potato Slices, Frozen Tofu, Fried Tofu Puff, Fried Tofu Skin, Vermicelli, Scallion",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dctb1eocj/image/upload/v1701248548/tastypot_roseville/12_zbvoay.png",
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
