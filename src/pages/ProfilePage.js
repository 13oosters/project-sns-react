import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../utils/api";
import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";
import ProfileInformation from "../components/profile/ProfileInformation";
import SortButtons from "../components/profile/SortButtons";
import Cards from "../components/common/Cards";
import GridCards from "../components/profile/GridCards";
import Modal from "../components/common/Modal";
import LayoutSection from "../components/style/PageLayout";

const ProfilePagePostDiv = styled.div`
  height: 34.8rem;
`;

const ProfileWrapper = styled.div`
  height: calc(100% - 112.8px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function ProfilePage({ setHasToken }) {
  const [myProfile, setMyProfile] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const [isProfileExist, setIsProfileExist] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  const [myPostData, setMyPostData] = useState({});
  const [listClick, setListClick] = useState(false);
  const [albumClick, setAlbumClick] = useState(true);

  const { account } = useParams();

  const navigate = useNavigate();

  const getMyProfile = async () => {
    try {
      const res = await API.get("/user/myinfo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const user = res.data.user;

      setMyProfile(user);

      return user;
    } catch (err) {
      throw new Error(err);
    }
  };

  const getUserProfile = async () => {
    try {
      const res = await API.get(`/profile/${account}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const user = res.data.profile;

      setUserProfile(user);
      setIsProfileExist(true);
    } catch (e) {
      setIsProfileExist(false);
      alert(
        "해당 프로필을 찾을 수 없습니다. 다시 확인 후 조회하여 주십시오. 😥",
      );
      navigate(-1);
    }
    return "";
  };

  const getPost = async () => {
    try {
      const res = await API.get(`/post/${account}/userpost`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      const post = res.data;

      setMyPostData(post);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getMyProfile();
    getUserProfile();

    getPost();
  }, [account]);

  return (
    <>
      {isProfileExist ? (
        <LayoutSection>
          <Header
            type="profile"
            setProfileModal={setProfileModal}
            profileModal={profileModal}
          />
          <ProfileWrapper>
            <ProfileInformation
              setUserProfile={setUserProfile}
              followList={myProfile.following}
              myaccount={myProfile.accountname}
              profileData={
                account === myProfile.accountname ? myProfile : userProfile
              }
            />

            <SortButtons
              listClick={listClick}
              setListClick={setListClick}
              albumClick={albumClick}
              setAlbumClick={setAlbumClick}
            />
            <ProfilePagePostDiv>
              {listClick === true && albumClick === false ? (
                <Cards feed={myPostData.post} />
              ) : (
                <GridCards postData={myPostData.post} />
              )}
            </ProfilePagePostDiv>
          </ProfileWrapper>
          {userProfile.accountname !== myProfile.accountname ? (
            <Modal
              type="otherprofile"
              modal={profileModal}
              isModal={setProfileModal}
            />
          ) : (
            <Modal
              type="myprofile"
              modal={profileModal}
              isModal={setProfileModal}
              setHasToken={setHasToken}
            />
          )}

          <NavBar
            type="프로필"
            isMyProfile={account === myProfile.accountname}
          />
        </LayoutSection>
      ) : null}
    </>
  );
}
