import React from "react";
import Basket from "./components/Basket";
import Main from "./components/Main";
import { Grid, GridItem } from "@chakra-ui/react";

const Home = ({ state, dispatch }) => {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} w="100%">
        <GridItem colSpan={2} w="100%" h="" bg="blue.500">
          <Main state={state} dispatch={dispatch} />
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          <Basket state={state} dispatch={dispatch} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
