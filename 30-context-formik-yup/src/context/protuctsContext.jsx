import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const name = "gurban";
  const [users, setUsers] = useState([]);
  const [surname, setSurname] = useState("gurbanzada");

  return (
    <ProductsContext.Provider
      value={{ name, surname, setSurname, users, setUsers }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
