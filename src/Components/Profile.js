import React, { useState } from "react";
import { Data } from "./Data";

const Profile = () => {
  const [thisUser, setThisUser] = useState("");
  const filteredUser = Data.filter(
    (Datum) =>
      Datum.firstName.includes(thisUser) || Datum.lastName.includes(thisUser)
  );

  const getUser = filteredUser.map((Datum) => {
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
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={thisUser}
          onChange={(event) => {
            setThisUser(event.target.value);
          }}
        />
      </div>
      <ul>{getUser}</ul>
    </div>
  );
};

export default Profile;
