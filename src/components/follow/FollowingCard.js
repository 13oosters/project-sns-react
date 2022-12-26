import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FollowingCard({ followingList }) {
  console.log("card", followingList);
  const userUrl = `/profile/${followingList.accountname}`;

  return (
    <li className="followItem">
      <Link to={userUrl} className="followLink">
        <div className="followerImage">
          <img src={followingList.image} alt="프로필 이미지" />
        </div>

        <div className="followInformation">
          <p className="followerName">{followingList.userName}</p>
          <p className="followerIntroduce">{followingList.intro}</p>
        </div>
      </Link>
      {/* 팔로우 중인 유저 프로필에서는 취소 버튼, 팔로루 하고 있지 않은 유저 프로필에서는 팔로우 버튼 */}
      {/* <button className="followButton">팔로우</button> */}
      <button className="cancelButton">취소</button>
    </li>
  );
}
