import React, { useEffect } from "react";
import { getDataById } from "../../../services";
import { endPoints } from "../../../services/api";

const Basket = ({ state, dispatch }) => {
  useEffect(() => {
    getDataById(endPoints.users, "1").then((res) => {
      dispatch({
        type: "SetBasket",
        basket: res.basket,
      });
    });
  }, []);

  console.log(state.basket);

  return (
    <div>
      Basket
      <ul>
        {state.basket.map((elem) => {
          return <li>{elem.id}</li>;
        })}
      </ul>
    </div>
  );
};

export default Basket;
