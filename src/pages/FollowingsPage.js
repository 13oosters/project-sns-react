import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import API from "../utils/api";
import Header from "../components/style/Header";
import FollowingsCards from "../components/follow/FollowingsCards";
import NavBar from "../components/style/NavBar";
import LayoutSection from "../components/style/PageLayout";

export default function FollowingsPage() {
  const [followingsList, setFollowingsList] = useState([]);
  const [isUnfollowed, setIsUnfollowed] = useState([]);
  const token = localStorage.getItem("token");
  const { account } = useParams();
  const navigate = useNavigate();

  const getFollowingsList = async () => {
    const res = await API.get(`/profile/${account}/following`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        setFollowingsList(response.data);
      })
      .catch((err) => {
        alert(
          "해당 프로필을 찾을 수 없습니다. 다시 확인 후 조회하여 주십시오. 😥",
        );
        navigate(-1);
      });
  };

  useEffect(() => {
    getFollowingsList();
  }, []);
  useEffect(() => {
    setIsUnfollowed(followingsList.map((_) => false));
  }, [followingsList]);

  return (
    <LayoutSection>
      <Header type="followings" />
      <FollowingsCards
        followingsList={followingsList}
        isUnfollowed={isUnfollowed}
        setIsUnfollowed={setIsUnfollowed}
        setFollowingsList={setFollowingsList}
      />
      <NavBar />
    </LayoutSection>
  );
}
