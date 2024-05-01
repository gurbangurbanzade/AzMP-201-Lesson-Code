import React from "react";
import Basket from "./components/Basket";
import Main from "./components/Main";
import { Grid, GridItem } from "@chakra-ui/react";

const Home = ({ state, dispatch }) => {
  return (
    <div>
      <Main state={state} dispatch={dispatch} />
    </div>
  );
};

export default Home;
