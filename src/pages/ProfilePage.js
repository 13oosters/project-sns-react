import React, { useEffect, useState, lazy } from "react";

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

const ProfilePagePostDiv = styled.div`
  height: 34.8rem;
`;

export default function ProfilePage() {
  const [myProfile, setMyProfile] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const [isProfileExist, setIsProfileExist] = useState(false);

  console.log(myProfile);

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
      alert("해당 프로필을 찾을 수 없습니다. 다시 확인 후 조회하여 주십시오😥");
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
  }, []);

  useEffect(() => {}, [userProfile]);

  // console.log(myPostData.post);

  return (
    <>
      {isProfileExist ? (
        <div>
          <Header type="profile" />

          <ProfileInformation
            setUserProfile={setUserProfile}
            followList={myProfile.following}
            myaccount={myProfile.accountname}
            profileData={
              account === myPostData.accountname ? myProfile : userProfile
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
          <Modal type="myprofile" />
          <NavBar type="프로필" />
        </div>
      ) : null}
    </>
  );
}
