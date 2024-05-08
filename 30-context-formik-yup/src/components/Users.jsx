import React, { useContext } from "react";
import { UserContext } from "../context/usersContext";

const Users = () => {
  const { name, surname, setSurname, users, setUsers } =
    useContext(UserContext);

  return (
    <div>
      Users
      <ul>
        {users.map((elem, i) => {
          return <li key={i}>{elem.contactTitle}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
