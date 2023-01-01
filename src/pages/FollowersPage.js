import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      .catch((err) => console.log(err));
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
