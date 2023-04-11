import React from "react";
import { Data } from "./Data";

const Users = () => {
  const User = Data.map((Datum) => {
    return (
      <li key={Datum.id}>
        <img src={Datum.picture} alt="userPicture" />
        <p>{Datum.id}</p>
        <h4>
          {Datum.title} {Datum.firstName} {Datum.lastName}
        </h4>
      </li>
    );
  });

  return (
    <div>
      <ul>{User}</ul>
    </div>
  );
};

export default Users;
