import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import API from "../../utils/api";
import FollowButton from "../style/follow/FollowButton";
import FollowCancelButton from "../style/follow/FollowCancelButton";

const FollowerListLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FollowerLiImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
`;

const FollowerLiDiv = styled.div`
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

export default function FollowersCard({
  image,
  username,
  accountname,
  intro,
  isfollow,
  idx,
  isUnfollowed,
  setIsUnfollowed,
}) {
  const navigate = useNavigate();
  const { account } = useParams();

  const handleFollow = async () => {
    // 팔로우버튼을 누르면 팔로우를 해야 함
    // false일 때가 팔로우 되어있는 상태다.
    // 그러면 false일 때 버튼을 누르면 언팔로우 해야 한다.

    console.log(isUnfollowed[idx]);
    if (!isUnfollowed[idx]) {
      // 언팔로우
      const res = await API.delete(`/profile/${accountname}/unfollow`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      console.log(res);
      const copy = [...isUnfollowed];

      copy[idx] = true;
      setIsUnfollowed([...copy]);
    } else {
      const res = await API.post(`/profile/${accountname}/follow`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const copy = [...isUnfollowed];

      copy[idx] = false;
      setIsUnfollowed([...copy]);
    }
  };

  const navigateTo = (url) => {
    navigate(`/${url}`);
  };

  return (
    <FollowerListLi>
      <FollowerLiImage
        onClick={() => {
          navigateTo(accountname);
        }}
        src={image}
        alt="프로필 이미지"
      />
      <FollowerLiDiv
        onClick={() => navigateTo(accountname)}
        style={{ width: "100%", textAlign: "left" }}
      >
        <FollowerName>{username}</FollowerName>
        <FollowerIntroduce>{intro}</FollowerIntroduce>
      </FollowerLiDiv>
      <FollowCancelButton onClick={handleFollow}>
        {isUnfollowed[idx] ? "팔로우" : "취소"}
      </FollowCancelButton>
    </FollowerListLi>
  );
}
