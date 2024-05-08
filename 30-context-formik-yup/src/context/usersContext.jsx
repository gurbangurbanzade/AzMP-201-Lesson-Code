import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const name = "gurban";
  const [users, setUsers] = useState([]);
  const [surname, setSurname] = useState("gurbanzada");

  return (
    <UserContext.Provider
      value={{ name, surname, setSurname, users, setUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};
