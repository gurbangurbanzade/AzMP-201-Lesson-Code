import React, { useEffect, useState } from "react";
import ToDoApp from "./../ToDoAPP";
// import "./style.css";
import style from "./style.module.css";
import { Button } from "react-bootstrap";

import { Title } from "./styleComponent";
const LifeCycle = () => {
  console.log("style", style);
  const [result, setResult] = useState(true);
  let [count, setCount] = useState(0);
  // bu komponent yarananda calisir
  useEffect(() => {
    console.log("component yarandi ");
  }, []);

  // bu komponent render olanda calisir

  useEffect(() => {
    console.log("component render olundu");
  });

  // bu komponentin hansisa state deyisende istediyimiz kodlar calisir

  useEffect(() => {
    console.log("count deyisende calisiram");
  }, [count]);

  // bu komponentin silinen zaman bas verir

  //   useEffect(() => {
  //     return () => {
  //       console.log("silindi");
  //     };
  //   }, []);
  return (
    <div>
      <Title>LifeCycle</Title>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <h1 className={style.box}>Box</h1>
      <button onClick={() => setResult(!result)}>Change</button>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        INC
      </button>
      <ToDoApp />
    </div>
  );
};

export default LifeCycle;
