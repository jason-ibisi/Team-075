import React, { Fragment } from "react";
import "./userViewProfile.styles.css";
import ReportHistory from "../report-history/ReportHistory";
import UpdateProfileButton from "../update-profile-button/UpdateProfileButton";

function UserViewProfile() {
  return (
    <Fragment>
      <h2 className="main-heading">Welcome</h2>
      <p className="sub-heading">Profile information</p>
      <img
        src="images/profilePicture.svg"
        alt="upload profile pic"
        id="profile-pic"
      />
      <h4 className="profile-name">Johnson Pearson</h4>
      <p className="phone-number">+234 803 1234 5678</p>
      <p className="mail">johnson@mail.com</p>
      <UpdateProfileButton />
      <h5 className="report-heading">Report History</h5>
      <ReportHistory />
    </Fragment>
  );
}
export default UserViewProfile;
