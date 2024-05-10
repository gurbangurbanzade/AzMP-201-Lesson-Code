import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delFav } from "../../redux/slices/favoritesSlice";

const Favorites = () => {
  const fav = useSelector((state) => state.fav.fav);
  const dispatch = useDispatch();
  return (
    <div>
      Favorites
      <ul>
        {fav.map((elem, i) => {
          return (
            <li key={i}>
              {elem.id}----{elem.name}
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => {
                  dispatch(delFav(elem.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
