import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import FollowCountP from "../style/profile/FollowCountP";
import FollowCountSpan from "../style/profile/FollowCountSpan";
import BasicProfileImage from "../../assets/image/basic-profile-img.png";
import Button from "../style/Button";

const UserProfileWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;
  padding: 3rem 1.6rem 2.6rem;
  height: 31.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.lightColor};
  box-sizing: border-box;
`;

const UserProfileTopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.7rem;
  margin-bottom: 1.5rem;
`;

const UserProfileTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 0.7rem; */
`;

const FollowCountLink = styled.a`
  text-align: center;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  /* margin-bottom: 1.6rem; */
`;

const UserNameP = styled.p`
  font-size: ${(props) => props.theme.largeFontSize};
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 0.6rem;
`;

const AccountNameP = styled.p`
  font-size: ${(props) => props.theme.smallFontSize};
  color: ${(props) => props.theme.darkLightColor};
  font-weight: 400;
  line-height: 1.4rem;
  margin-bottom: 1.6rem;

  &::before {
    content: "@ ";
  }
`;

const UserIntroduceP = styled.p`
  margin-bottom: 2.4rem;
  font-size: ${(props) => props.theme.baseFontSize};
  font-weight: 400;
  line-height: 1.8rem;
  color: ${(props) => props.theme.darkLightColor};
`;

const ProfileButton = styled(Button)`
  width: 12rem;
  height: 3.4rem;
  padding: 0;
`;

export default function ProfileInformation({
  accountname,
  followerCount,
  followingCount,
  image,
  username,
  intro,
}) {
  console.log(image);

  return (
    <UserProfileWrapDiv>
      <UserProfileTopDiv>
        <FollowCountLink>
          <FollowCountP type="follows">{followerCount}</FollowCountP>
          <FollowCountSpan>follower</FollowCountSpan>
        </FollowCountLink>
        <ProfileImg src={`https://mandarin.api.weniv.co.kr/${image}`} alt="" />
        <FollowCountLink>
          <FollowCountP>{followingCount}</FollowCountP>
          <FollowCountSpan>followings</FollowCountSpan>
        </FollowCountLink>
      </UserProfileTopDiv>
      <UserProfileTextDiv>
        <UserNameP>{username}</UserNameP>
        <AccountNameP>{accountname}</AccountNameP>
        <UserIntroduceP>{intro}</UserIntroduceP>
        <ProfileButton>팔로우</ProfileButton>
      </UserProfileTextDiv>
    </UserProfileWrapDiv>
  );
}

// import React, { Link } from "react";
// import styled from "styled-components";
// import ProfileButton from "./ProfileButton";

// const ProfileHeader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   padding: 3rem 0 1.5rem 0;
// `;

// const FollowerCount = styled.p`
//   font-weight: 700;
//   font-size: ${(props) => props.theme.xLargeFontSize};
// `;

// export default function ProfileInformation({ profileInformation }) {
//   const username = localStorage.getItem("username");
//   const followLink = `/${username}/follower`;
//   const followingLink = `/${username}/following`;
//   const user = profileInformation.user;

//   const profile = profileInformation.profile;

//   return (
//     <div className="imformationWrap">
//       {profile ? (
//         <>
//           <ProfileHeader>
//             <FolloweCountDiv>
//               <>{user.followerCount}</>
//               <p className="followName followers">followers</p>
//             </FolloweCountDiv>
//             <img src={user.image} alt="프로필 이미지" />
//             <Link to={followingLink}>
//               <p className="followCount following">{user.followingCount}</p>
//               <p className="followName following">followings</p>
//             </Link>
//           </ProfileHeader>
//           <div>
//             <p className="userName">{user.username}</p>
//             <p className="userID">{user.accountname}</p>
//             <p className="userIntroduce">{user.introduce}</p>
//           </div>
//         </>
//       ) : null}
//       <ProfileButton />
//     </div>
//   );
// }
