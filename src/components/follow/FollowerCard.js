import React from "react";
import BasicImage from "../../assets/image/basic-profile-img-post.png";

export default function FollowerCard() {
  return (
    <li className="followItem">
      <a href="#" className="followLink">
        <img src={BasicImage} alt="" />
        <div className="followInformation">
          <p className="followerName">앙리</p>
          <p className="followerIntroduce">까만 초코볼</p>
        </div>
      </a>
      <button className="followButton">팔로우</button>
      {/* <button className="cancelButton">취소</button> */}
    </li>
  );
}
