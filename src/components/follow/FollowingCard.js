import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import FollowCancelButton from "../style/follow/FollowCancelButton";
import FollowButton from "../style/follow/FollowButton";

const FollowingListLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FollowingLiImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const FollowingLiDiv = styled.div`
  margin-left: 1.2rem;
`;

const FollowerName = styled.p`
  font-weight: 500;
  font-size: ${(props) => props.theme.baseFontSize};
  line-height: 1.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.6rem;
`;

const FollowerIntroduce = styled.p`
  font-weight: 400;
  line-height: 1.5rem;
  font-size: ${(props) => props.theme.smallFontSize};
  color: ${(props) => props.theme.darkLightColor};
`;

export default function FollowingCard({ followingList }) {
  console.log("card", followingList);
  const [isFollow, setIsFollow] = useState(false);

  const navigate = useNavigate();

  const handleFollowButton = () => {
    setIsFollow(!isFollow);
  };

  //  console.log("card", followingList);

  //  const userUrl = `/profile/${followingList.accountname}`;

  return (
    <FollowingListLi onClick={() => navigate("/accountname")}>
      <FollowingLiImage
        src="https://cdn.pixabay.com/photo/2019/07/23/13/51/shepherd-dog-4357790__340.jpg"
        alt="프로필 이미지"
      />
      <FollowingLiDiv style={{ width: "100%", textAlign: "left" }}>
        <FollowerName>앙리</FollowerName>
        <FollowerIntroduce>까만 초코볼</FollowerIntroduce>
      </FollowingLiDiv>
      {/* 팔로우 중인 유저 프로필에서는 취소 버튼, 팔로루 하고 있지 않은 유저 프로필에서는 팔로우 버튼 */}
      {/*      {followingList.isFollow === true ? (
        <FollowCancelButton onClick={handleFollowButton}>
          취소
        </FollowCancelButton>
      ) : (
        <FollowButton onClick={handleFollowButton}>팔로우</FollowButton>
      )} */}
      {/* <FollowButton onClick={handleFollowButton}>팔로우</FollowButton> */}
      <FollowCancelButton onClick={handleFollowButton}>취소</FollowCancelButton>
    </FollowingListLi>
  );
}
