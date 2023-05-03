import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import API from "../../utils/api";
import FollowCountP from "../style/profile/FollowCountP";
import FollowCountSpan from "../style/profile/FollowCountSpan";
import defaultImage from "../../assets/image/basic-profile-img.png";
import Button from "../style/Button";

const UserProfileWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 1.6rem 2.6rem;
  height: 31.4rem;
  box-sizing: border-box;
  border-bottom: 0.1rem solid ${(props) => props.theme.lightColor};
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
`;

const FollowCountLink = styled.a`
  text-align: center;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
`;

const UserNameP = styled.p`
  margin-bottom: 0.6rem;
  font-size: ${(props) => props.theme.largeFontSize};
  font-weight: 700;
  line-height: 2rem;
`;

const AccountNameP = styled.p`
  margin-bottom: 1.6rem;
  font-size: ${(props) => props.theme.smallFontSize};
  color: ${(props) => props.theme.darkLightColor};
  font-weight: 400;
  line-height: 1.4rem;

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
  profileData: {
    _id,
    accountname,
    following,
    followerCount,
    followingCount,
    image,
    username,
    intro,
  },
  myaccount,
  followList,
  setUserProfile,
}) {
  const [isFollow, setIsFollow] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const navigate = useNavigate();
  const { account } = useParams();

  useEffect(() => {
    if (followList) {
      const check = followList.includes(_id);

      setIsFollow(check);
      setIsPending(false);
    }
  }, []);

  const handleFollow = async () => {
    setIsFollow(!isFollow);

    if (isFollow) {
      // 언팔로우
      const res = await API.delete(`profile/${accountname}/unfollow`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      const user = res.data.profile;

      setUserProfile({ ...user });
    } else {
      const res = await API.post(`/profile/${accountname}/follow`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const user = res.data.profile;

      setUserProfile({ ...user });
    }
  };

  const refineImageUrl = (file) => {
    if (file.includes("https://api.mandarin.weniv.co.kr")) {
      return file;
    }
    return `https://api.mandarin.weniv.co.kr/${file}`;
  };

  const noImage = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <UserProfileWrapDiv>
      <UserProfileTopDiv>
        <FollowCountLink onClick={() => navigate(`/${accountname}/followers`)}>
          <FollowCountP type="follows">{followerCount}</FollowCountP>
          <FollowCountSpan>followers</FollowCountSpan>
        </FollowCountLink>
        <ProfileImg
          src={refineImageUrl(image)}
          onError={noImage}
          alt={username}
        />

        <FollowCountLink onClick={() => navigate(`/${accountname}/followings`)}>
          <FollowCountP>{followingCount}</FollowCountP>
          <FollowCountSpan>followings</FollowCountSpan>
        </FollowCountLink>
      </UserProfileTopDiv>
      <UserProfileTextDiv>
        <UserNameP>{username}</UserNameP>
        <AccountNameP>{accountname}</AccountNameP>
        <UserIntroduceP>{intro}</UserIntroduceP>

        {account === myaccount ? (
          <ProfileButton onClick={() => navigate(`/${accountname}/settings`)}>
            프로필 수정
          </ProfileButton>
        ) : (
          <ProfileButton onClick={handleFollow}>
            {isFollow ? "팔로우 취소" : "팔로우"}
          </ProfileButton>
        )}
      </UserProfileTextDiv>
    </UserProfileWrapDiv>
  );
}
