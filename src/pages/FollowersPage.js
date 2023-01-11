import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import API from "../utils/api";

import Header from "../components/style/Header";
import FollowersCards from "../components/follow/FollowersCards";
import NavBar from "../components/style/NavBar";
import LayoutSection from "../components/style/PageLayout";

export default function FollowersPage() {
  const [followersList, setFollowersList] = useState([]);
  const [isUnfollowed, setIsUnfollowed] = useState([]);
  const token = localStorage.getItem("token");
  const { account } = useParams();
  const navigate = useNavigate();

  const getFollowersList = async () => {
    const res = await API.get(`/profile/${account}/follower`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        setFollowersList(response.data);
      })
      .catch((err) => {
        alert(
          "해당 프로필을 찾을 수 없습니다. 다시 확인 후 조회하여 주십시오. 😥",
        );
        navigate(-1);
      });
  };

  useEffect(() => {
    getFollowersList();
  }, []);
  useEffect(() => {
    setIsUnfollowed(followersList.map((_) => false));
  }, [followersList]);

  return (
    <LayoutSection>
      <Header type="followers" />
      <FollowersCards
        followersList={followersList}
        isUnfollowed={isUnfollowed}
        setIsUnfollowed={setIsUnfollowed}
        setFollowersList={setFollowersList}
      />
      <NavBar />
    </LayoutSection>
  );
}
