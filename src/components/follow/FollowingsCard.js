import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import FollowCancelButton from "../style/follow/FollowCancelButton";
import API from "../../utils/api";

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

export default function FollowingsCard({
  image,
  username,
  accountname,
  intro,
  isfollow,
  idx,
  isUnfollowed,
  setIsUnfollowed,
  setFollowingsList,
  followingsList,
}) {
  const navigate = useNavigate();

  const handleFollow = async () => {
    if (isfollow) {
      const res = await API.delete(`/profile/${accountname}/unfollow`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      const followings = [...followingsList];

      followings[idx].isfollow = !isfollow;
      setFollowingsList([...followings]);

      const copy = [...isUnfollowed];

      copy[idx] = true;
      setIsUnfollowed([...copy]);
    } else {
      const res = await API.post(`/profile/${accountname}/follow`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const followings = [...followingsList];

      followings[idx].isfollow = !isfollow;
      setFollowingsList([...followings]);
      const copy = [...isUnfollowed];

      copy[idx] = false;
      setIsUnfollowed([...copy]);
    }
  };

  const navigateTo = (url) => {
    navigate(`/${url}`);
  };

  return (
    <FollowingListLi>
      <FollowingLiImage
        onClick={() => {
          navigateTo(accountname);
        }}
        src={image}
        alt={`${accountname}의 프로필 사진`}
      />
      <FollowingLiDiv
        onClick={() => {
          navigateTo(accountname);
        }}
        style={{ width: "100%", textAlign: "left" }}
      >
        <FollowerName>{username}</FollowerName>
        <FollowerIntroduce>{intro}</FollowerIntroduce>
      </FollowingLiDiv>

      <FollowCancelButton onClick={handleFollow}>
        {isfollow ? "취소" : "팔로우"}
      </FollowCancelButton>
    </FollowingListLi>
  );
}
