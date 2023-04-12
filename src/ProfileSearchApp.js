import React from "react";
import Users from "./Components/Users";
import Profile from "./Components/Profile";
import "./Styles/app.css";

const ProfileSearchApp = () => {
  return (
    <div className="app-container">
      <Profile />
      <Users />
    </div>
  );
};

export default ProfileSearchApp;
