import React from "react";
import FollowerCount from "./FollowerCount";
import FollowingCount from "./FollowingCount";
// import styled from "styled-components";

// import UploadImg from "../common/ProfileSetting";
// import MyProfileButton from "../style/profile/MyProfileButton";

// const UserBioDiv = styled.div`
//   padding: 2.8rem 5.5rem;
// `;

export default function UserBio() {
  return (
    <>
      <div>
        <FollowerCount />
        <ing src="#" alt="프로필 사진" style={{ objecFit: "cover" }} />
        <FollowingCount />
        <strong>호박이</strong>
        <p>hobak2</p>
        <p>소개 메시지</p>
      </div>
      <div></div>
    </>
  );
}
