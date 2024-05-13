import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((state) => state.basket.bskt);

  console.log(basket);
  return (
    <div>
      Basket
      <ul>
        {basket.map((elem, i) => {
          return (
            <li key={i}>
              {elem.id}----{elem.name} ---count-//{elem.count}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Basket;
