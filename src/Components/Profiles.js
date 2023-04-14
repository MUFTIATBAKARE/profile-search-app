import React from "react";

const Profiles = ({ filteredProfiles }) => {
  // filteredprofile to be listed out using map function
  const thisProfile = filteredProfiles.map((profile) => {
    return (
      <li key={profile.id}>
        <img src={profile.picture} alt="profilePicture" />
        <span>
          <p>{profile.id}</p>
          <h4>
            {profile.title} {profile.firstName} {profile.lastName}
          </h4>
        </span>
      </li>
    );
  });
  return (
    <div>
      <ul>{thisProfile}</ul>
    </div>
  );
};
export default Profiles;
