import React from "react";
import Header from "../components/style/Header";
import BasicImage from "../assets/image/basic-profile-image-post.png";
import NavBar from "../components/style/NavBar";

export default function ProfilePage() {
  return (
    <div className="profileWrap">
      <Header type="profile" />
      <div className="profileInformationWrap">
        <a href="/followerlist">
          <p className="followCount">2950</p>
          <p className="followName followers">followers</p>
        </a>
        <img className="userImage" src={BasicImage} alt="프로필 이미지" />
        <a href="/followinglist">
          <p className="followCount following">128</p>
          <p className="followName following">followings</p>
        </a>
      </div>
      <p className="userName">앙리</p>
      <p className="userID">imthecutestdog</p>
      <p className="userIntroduce">까만 초코볼</p>
      <button className="profileFollowButton">팔로우</button>
      <NavBar type="프로필" />
    </div>
  );
}
