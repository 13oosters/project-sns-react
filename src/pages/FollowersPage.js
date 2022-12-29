import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import API from "../utils/api";
import Header from "../components/style/Header";
import FollowersCards from "../components/follow/FollowersCards";
import NavBar from "../components/style/NavBar";

const FollowerWrap = styled.div`
  width: 100%;
`;

export default function FollowersPage() {
  const [followersList, setFollowersList] = useState([]);
  const [isUnfollowed, setIsUnfollowed] = useState([]);
  const token = localStorage.getItem("token");
  const { account } = useParams();

  console.log(followersList);

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
    <FollowerWrap>
      <Header type="followers" />
      <FollowersCards
        followersList={followersList}
        isUnfollowed={isUnfollowed}
        setIsUnfollowed={setIsUnfollowed}
      />
      <NavBar />
    </FollowerWrap>
  );
}
