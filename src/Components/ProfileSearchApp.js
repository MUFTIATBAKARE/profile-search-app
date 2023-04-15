import React, { useState } from "react";
import { Data } from "./Data";
import "../Styles/app.css";
import Profiles from "./Profiles";
import SearchProfile from "./SearchProfile";

const ProfileSearchApp = () => {
  const [thisProfile, setThisProfile] = useState("");

  const filteredProfiles = Data.filter((Datum) => {
    return (
      Datum.firstName.toLowerCase().includes(thisProfile.toLowerCase()) ||
      Datum.lastName.toLowerCase().includes(thisProfile.toLowerCase())
    );
  });
  return (
    <div className="app-container">
      <SearchProfile
        thisProfile={thisProfile}
        setThisProfile={setThisProfile}
      />
      <Profiles filteredProfiles={filteredProfiles} />
    </div>
  );
};

export default ProfileSearchApp;
