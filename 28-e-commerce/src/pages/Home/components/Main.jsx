import React, { useEffect, useReducer } from "react";
import { getAllData } from "../../../services";
import { endPoints } from "../../../services/api";
import Cardx from "./Cardx";
import { v4 as uuidv4 } from "uuid";
import { Grid, GridItem } from "@chakra-ui/react";

const Main = ({ state, dispatch }) => {
  useEffect(() => {
    getAllData(endPoints.products).then((data) => {
      console.log(data);

      dispatch({
        type: "SetProducts",
        products: data,
      });
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        onChange={(e) => {
          dispatch({
            type: "SearchWord",
            searchValue: e.target.value,
          });
        }}
      />

      <button
        onClick={() => {
          dispatch({
            type: "AtoZ",
          });
        }}
      >
        A to Z
      </button>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {state.filteredProd.map((elem) => {
          return (
            <GridItem key={uuidv4()} w="100%" bg="blue.500">
              <Cardx product={elem} />;
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default Main;
