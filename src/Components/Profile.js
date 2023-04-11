import React, { useState } from "react";
import { Data } from "./Data";

const Profile = () => {
  const [thisUser, setThisUser] = useState("");
  const filteredUser = Data.filter((Datum) => Datum.firstName === thisUser);

  const getUser = filteredUser.map((Datum) => {
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
      <input
        type="text"
        placeholder="Search by name..."
        value={thisUser}
        onChange={(event) => {
          setThisUser(event.target.value);
        }}
      />
      <ul>{getUser}</ul>
    </div>
  );
};

export default Profile;
