import React from "react";
import "./App.css";

interface ProfileProps {
  imageSrc: string;
  name: string;
  position: string;
  additional: string;
  site: string;
}

class Profile extends React.Component<ProfileProps> {
  render() {
    const { imageSrc, name, position, additional, site } = this.props;

    return (
      <a href={site} target="_blank">
        <div className="profile-tab">
          <img
            src={imageSrc}
            style={{ width: "180px", paddingBottom: "10px" }}
            alt={`${name}'s profile`}
            className="profile-image"
          />
          <h2>{name}</h2>
          <h5 style={{ paddingTop: "4px" }}>{position}</h5>
          <h5>{additional}</h5>
        </div>
      </a>
    );
  }
}

export default Profile;
