import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
//  import { Link, useLocation, useParams } from "react-router-dom";

// import API from "../../utils/api";
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

export default function FollowerCard({ followerList }) {
  console.log("card", followerList);
  // const token = localStorage.getItem("token");

  const [isFollow, setIsFollow] = useState(false);
  const navigate = useNavigate();

  const handleFollowButton = () => {
    setIsFollow(!isFollow);
    // if (followerList.isFollow === true) {
    //   handleSubmitUnFollow();

    //   console.log(followerList.isFollow);
    // } else {
    //   handleSubmitFollow();
    // }
  };

  // const userUrl = `/profile/${followerList.accountname}`;

  return (
    <FollowerListLi onClick={() => navigate("/accountname")}>
      <FollowerLiImage
        src="https://cdn.pixabay.com/photo/2019/07/23/13/51/shepherd-dog-4357790__340.jpg"
        alt="프로필 이미지"
      />
      <FollowerLiDiv style={{ width: "100%", textAlign: "left" }}>
        <FollowerName>앙리</FollowerName>
        <FollowerIntroduce>까만 초코볼</FollowerIntroduce>
      </FollowerLiDiv>

      {isFollow === true ? (
        <FollowCancelButton onClick={handleFollowButton}>
          취소
        </FollowCancelButton>
      ) : (
        <FollowButton onClick={handleFollowButton}>팔로우</FollowButton>
      )}
    </FollowerListLi>
  );
}
