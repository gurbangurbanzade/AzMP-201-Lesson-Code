import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/usersContext";
import Users from "./Users";
import axios from "axios";

const Child = () => {
  // const name = useContext(UserContext);
  const { name, surname, setSurname, users, setUsers } =
    useContext(UserContext);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Child comp- {name}</h1>
      <h1>Surname {surname}</h1>
      <button
        onClick={() => {
          setSurname("gurban");
        }}
      >
        Click me
      </button>
      <Users />
    </div>
  );
};

export default Child;
