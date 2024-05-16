import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoot = () => {
  const count = useSelector((state) => state.basketBf.basketCount);

  // let arr = [[1, 2]];

  // let arr2 = [...arr1];

  // let person1 = {
  //   name: "qurban",
  // };
  // let person2 = person1;
  // let person2 = [...person1];

  // console.log(person1.name);
  // console.log(person2.name);

  // person2.name = "ali";

  // console.log(person1.name);
  // console.log(person2.name);

  return (
    <div>
      <Navbar />
      <h1>BF104 Basket count/-{count} </h1>
      <Outlet />
    </div>
  );
};

export default UserRoot;
