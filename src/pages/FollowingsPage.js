import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import API from "../utils/api";
import Header from "../components/style/Header";
import FollowingsCards from "../components/follow/FollowingsCards";
import NavBar from "../components/style/NavBar";
import LayoutSection from "../components/style/PageLayout";



export default function FollowingsPage() {
  const [followingList, setFollowingList] = useState([]);
  const [isUnfollowed, setIsUnfollowed] = useState([]);
  const token = localStorage.getItem("token");
  const { account } = useParams();

  const getFollowingList = async () => {
    const res = await API.get(`/profile/${account}/following`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        setFollowingList(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFollowingList();
  }, []);
  useEffect(() => {
    setIsUnfollowed(followingList.map((_) => false));
  }, [followingList]);

  return (
    <LayoutSection>
      <Header type="followings" />
      <FollowingsCards
        followingList={followingList}
        isUnfollowed={isUnfollowed}
        setIsUnfollowed={setIsUnfollowed}
      />
      <NavBar />
    </LayoutSection>
  );
}
