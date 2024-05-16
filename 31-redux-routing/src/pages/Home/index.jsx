import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, getCount } from "../../redux/slices/basketSlice";
import { addFav } from "../../redux/slices/favoritesSlice";
import { addBasketBf, addBasketCount } from "../../redux/slices/bfBasketSlices";
const Home = () => {
  const basket = useSelector((state) => state.basket.bskt);
  const fav = useSelector((state) => state.fav.fav);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      UserPanel
      <ul>
        {data.map((elem, i) => {
          return (
            <li key={i}>
              {elem.id}--{elem.name}--------{" "}
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  dispatch(addBasket(elem));
                  dispatch(getCount());

                  // elem
                }}
              >
                Add Basket
              </button>
              <button
                type="button"
                className={
                  fav.find((el) => el.id == elem.id)
                    ? "bg-red-700 focus:outline-none text-white  hover:bg-red-800  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    : "bg-gray-700" +
                      "focus:outline-none text-white  hover:bg-red-800 bg-gray-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                }
                onClick={() => {
                  dispatch(addFav(elem));
                }}
              >
                AddFav
              </button>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  // console.log(elem);
                  dispatch(addBasketBf(elem));
                  dispatch(addBasketCount());
                }}
              >
                Add Basket BF
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
