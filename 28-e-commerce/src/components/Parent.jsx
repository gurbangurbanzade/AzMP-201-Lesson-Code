import React from "react";
import Chil from "./Chil";

const Parent = ({ children }) => {
  return (
    <div>
      Parent
      {children}
    </div>
  );
};

export default Parent;
