import React, { Link } from "react";
import ProfileButton from "./ProfileButton";

export default function ProfileInformation({ profileInformation }) {
  const username = localStorage.getItem("username");
  const followLink = `/${username}/follower`;
  const followingLink = `/${username}/following`;
  const user = profileInformation.user;

  return (
    <div className="imformationWrap">
      <div className="tempWrap">
        <Link to={followLink}>
          <p className="followCount followers">{user.followerCount}</p>
          <p className="followName followers">followers</p>
        </Link>
        <img src={user.image} alt="프로필 이미지" />
        <Link to={followingLink}>
          <p className="followCount following">{user.followingCount}</p>
          <p className="followName following">followings</p>
        </Link>
      </div>
      <div>
        <p className="userName">{user.username}</p>
        <p className="userID">{user.accountname}</p>
        <p className="userIntroduce">{user.introduce}</p>
      </div>
      <ProfileButton />
    </div>
  );
}
