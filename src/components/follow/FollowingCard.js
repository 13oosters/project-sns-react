import React from "react";
import BasicImage from "../../assets/image/basic-profile-image-post.png";

export default function FollowingCard({ followingList }) {
  return (
    <li className="followItem">
      <a href="" className="followLink">
        <img src={BasicImage} alt="프로필 이미지" className="followerImage" />

        <div className="followInformation">
          <p className="followerName">보리</p>
          <p className="followerIntroduce">보리보리쌀</p>
        </div>
      </a>
      {/* 팔로우 중인 유저 프로필에서는 취소 버튼, 팔로루 하고 있지 않은 유저 프로필에서는 팔로우 버튼 */}
      {/* <button className="followButton">팔로우</button> */}
      <button className="cancelButton">취소</button>
    </li>
  );
}
