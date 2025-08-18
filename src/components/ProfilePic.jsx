import React from "react";
import "../styles/ProfilePic.css";
import profile from "../assets/images/pp.jpeg";

const ProfilePic = () => {
  return (
    <div className="profile-pic">
      <img src={profile} alt="profile" />
    </div>
  );
};

export default ProfilePic;
