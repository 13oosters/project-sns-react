import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      .catch((err) => console.log(err));
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
