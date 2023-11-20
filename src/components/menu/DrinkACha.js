import React, { Fragment } from "react";
const listDrink = [
  {
    category: "Mustache",
    categoryImage: "milkcream1.png",
    nameImage: "Milk Creme Green Tea",
    itemDrinks: [
      { name: "Milk Creme Green Tea", price: "$5.75" },
      { name: "Milk Creme Black Tea", price: "$5.75" },
      { name: "Milk Creme Winter Melon", price: "$5.75" },
    ],
  },
  {
    category: "Milk Tea",
    categoryImage: "greentea1.png",
    nameImage: "Green Tea",
    itemDrinks: [
      { name: "Hokkaido Milk Tea ", price: "$5.50" },
      { name: "Milk  Tea", price: "$5.50" },
      { name: "Green Tea", price: "$4.75" },
      { name: "Peach Black/Green Tea ", price: "$5.20" },
      { name: "Mango Black/Green Tea", price: "$5.20" },
      { name: "Stawberry Black/Green Tea", price: "$5.20" },
      { name: "Passion Fruit Black/Green Tea ", price: "$5.20" },
      { name: "Thai Milk Tea", price: "$5.75" },
      { name: "Taro Milk Tea", price: "$5.75" },
    ],
  },
  {
    category: "Milk  & Matcha",
    categoryImage: "milkcreamblacktea1.png",
    nameImage: "Milk Creme Black Tea",
    itemDrinks: [
      { name: "Tiger Milk", price: "$6.00" },
      { name: "Tiger Milk with Grass Jelly", price: "$6.00" },
      { name: "Tiger Milk with Crystal Boba", price: "$6.00" },
      { name: "Matcha Latte ", price: "$6.00" },
    ],
  },
  {
    category: "Soda",
    categoryImage: "hokkaido1.png",
    nameImage: "Hokkaido Milk Tea",
    itemDrinks: [
      { name: "Coke", price: "$2.75" },
      { name: "Diet coke", price: "$2.75" },
      { name: "Sprite", price: "$2.75" },
    ],
  },
  {
    category: "Drinking Topping",
    categoryImage: "taiwanmilktea1.png",
    nameImage: "Taiwan Milk Tea",
    itemDrinks: [
      { name: "Rainbow Jelly", price: "$0.75" },
      { name: "Lychee Jelly", price: "$0.75" },
      { name: "Grass Jelly", price: "$0.75" },
      { name: "Tapioca Boba", price: "$0.75" },
    ],
  },
  {
    category: "Beer",
    categoryImage: "bluemoonbeer.png",
    nameImage: "Blue Moon Beer",
    itemDrinks: [
      { name: "Heneiken", price: "$6.00" },
      { name: "Corona", price: "$6.00" },
      { name: "Sapporo", price: "$6.00" },
      { name: "Blue Moon", price: "$6.00" },
    ],
  },
];
export const DrinkACha = () => {
  return (
    <Fragment>
      <div className="text-center">
        <div className="drink__tasty__acha line-bottom-title">
          <p className="my-3">Try our A-CHA</p>
          <div className="tastyMenu__hotpot__caption my-3">
            <p>Choose Your Drinks</p>
          </div>
        </div>
      </div>
      <section className="drink__tasty">
        <div className="container">
          <div className="row my-3">
            {listDrink.map((d) => {
              return (
                <Fragment key={d.category}>
                  <Fragment>
                    <div className="col-xs-12 col-sm-12 col-lg-6 d-flex justify-content-center my-4">
                      <div className="drink__tasty__list">
                        <div className="drink__tasty__list__item">
                          <div className="drink__tasty__list__img">
                            <img
                              src={`./image/${d.categoryImage}`}
                              alt={d.categoryImage}
                            />
                          </div>
                          <div className="drink__tasty__list__text">
                            <p>{d.nameImage}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-6 tasty__drinks_list__item">
                      <div className="tasty__drinks_list__item__title">
                        <h4 className>{d.category}</h4>
                      </div>
                      {d?.itemDrinks.map((drinkItem) => {
                        return (
                          <div key={drinkItem.name}>
                            <ul>
                              <li>
                                <div className="subtitle_drink">
                                  <div className="desc_drink">
                                    <span> {drinkItem.name} </span>
                                  </div>
                                  <div className="price__drink">
                                    {drinkItem.price}
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </Fragment>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
