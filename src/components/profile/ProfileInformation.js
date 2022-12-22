import React from "react";
import { Link } from "react-router-dom";

export default function ProfileInformation() {
  return (
    <div className="informationWrap">
      <div className="followers">
        <Link>
          <p>1290</p>
          <span>followers</span>
        </Link>
      </div>
      <div className="profileImage">
        <img src="" alt="" />
      </div>
      <div className="followings">
        <Link>
          <p>1290</p>
          <span>followers</span>
        </Link>
      </div>
    </div>
  );
}
