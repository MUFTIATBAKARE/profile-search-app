import React from "react";

const SearchProfile = (props) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={props.thisProfile}
        onChange={(event) => {
          props.setThisProfile(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchProfile;
