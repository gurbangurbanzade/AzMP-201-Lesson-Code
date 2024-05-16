import React from "react";
import { useSelector } from "react-redux";

const Basketbf = () => {
  const name = useSelector((store) => store.basketBf.name);
  const basket = useSelector((store) => store.basketBf.basket);

  return (
    <div>
      Basketbf
      <h1>{name}</h1>
      <ul>
        {basket.map((elem) => {
          return (
            <li key={elem.id}>
              -{elem.id}-{elem.name}--/-{elem.count}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Basketbf;
