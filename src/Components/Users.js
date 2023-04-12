import React from "react";
import { Data } from "./Data";
import "../Styles/app.css";

const Users = () => {
  const User = Data.map((Datum) => {
    return (
      <li key={Datum.id}>
        <img src={Datum.picture} alt="userPicture" />
        <span>
          <p>{Datum.id}</p>
          <h4>
            {Datum.title} {Datum.firstName} {Datum.lastName}
          </h4>
        </span>
      </li>
    );
  });

  return (
    <div className="users-container">
      <ul>{User}</ul>
    </div>
  );
};

export default Users;
