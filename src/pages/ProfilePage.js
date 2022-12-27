import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import API from "../utils/api";
// import GridCards from "../components/profile/GridCards";
import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";
import ProfileInformation from "../components/profile/ProfileInformation";
import SortButtons from "../components/profile/SortButtons";

import Cards from "../components/common/Cards";
import GridCards from "../components/profile/GridCards";

const ProfilePagePostDiv = styled.div`
  height: 34.8rem;
`;

export default function ProfilePage() {
  const [myProfile, setMyProfile] = useState({});
  const [myPostData, setMyPostData] = useState({});
  const [listClick, setListClick] = useState(false);
  const [albumClick, setAlbumClick] = useState(true);

  console.log(myProfile);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await API.get("/user/myinfo", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const user = res.data;

        setMyProfile(user);
      } catch (err) {
        throw new Error(err);
      }
    };

    /*  const getPost = async () => {
      try {
        const res = await API.get(":accountname/userpost", {
          headers: {
              "Authorization" : "Bearer {token}",
              "Content-type" : "application/json"
          }

        })
      }
    } */

    getProfile();
  }, []);

  return (
    <div>
      <Header type="profile" />
      <ProfileInformation {...myProfile.user} />
      <SortButtons
        listClick={listClick}
        setListClick={setListClick}
        albumClick={albumClick}
        setAlbumClick={setAlbumClick}
      />
      <ProfilePagePostDiv>
        {listClick === true && albumClick === false ? <Cards /> : <GridCards />}
      </ProfilePagePostDiv>
      <NavBar type="프로필" />
      <div>모달박스</div>
    </div>
  );
}
