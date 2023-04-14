import React, { useState } from "react";
import { Data } from "./Components/Data";
import "./Styles/app.css";
import Profiles from "./Components/Profiles";

const ProfileSearchApp = () => {
  // state set to store input value
  const [thisProfile, setThisProfile] = useState("");
  //   callBack function that will pass data from this parent component to searchList as props

  const filteredProfiles = Data.filter((Datum) => {
    return (
      Datum.firstName.toLowerCase().includes(thisProfile.toLowerCase()) ||
      Datum.lastName.toLowerCase().includes(thisProfile.toLowerCase())
    );
  });
  return (
    <div className="app-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={thisProfile}
          onChange={(event) => {
            setThisProfile(event.target.value);
          }}
        />
      </div>
      <Profiles filteredProfiles={filteredProfiles} />
    </div>
  );
};

export default ProfileSearchApp;
