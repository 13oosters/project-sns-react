import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import FollowButton from "../style/follow/followButton";
import FollowCancelButton from "../style/follow/FollowCancelButton";

// import API from "../../utils/api";

const FollowerWrap = styled.div`
  width: 100%;
`;

const FollowItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem 1.6rem 1.6rem;
`;

const FollowLink = styled.a`
  display: flex;
`;

const FollowerImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1.2rem;
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

export default function FollowerCard({ followerList }) {
  const userUrl = `/profile/${followerList.accountname}`;

  return (
    <FollowerWrap>
      <FollowItem className="followItem">
        <FollowLink to={userUrl} className="followLink">
          <div className="followerImage">
            <FollowerImage src={followerList.image} alt="프로필 이미지" />
          </div>
          <ProfileInformation className="followInformation">
            <FollowerName className="followerName">
              {followerList.username}
            </FollowerName>
            <FollowerIntroduce className="followerIntroduce">
              {followerList.intro}
            </FollowerIntroduce>
          </ProfileInformation>
        </FollowLink>
        {/* <FollowButton className="followButton">팔로우</FollowButton> */}
        <FollowCancelButton>취소</FollowCancelButton>
      </FollowItem>
    </FollowerWrap>
  );
}
