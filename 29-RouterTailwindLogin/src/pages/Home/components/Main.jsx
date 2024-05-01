import React, { useEffect, useReducer } from "react";
import { getAllData } from "../../../services";
import { endPoints } from "../../../services/api";
import Cardx from "./Cardx";
import { v4 as uuidv4 } from "uuid";
import { Grid, GridItem } from "@chakra-ui/react";

const Main = ({ state, dispatch }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {state.filteredProd.map((elem) => {
          return <Cardx key={uuidv4()} product={elem} />;
        })}
      </div>
    </div>
  );
};

export default Main;
