import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../utils/api";

import FollowerCards from "../components/follow/FollowerCards";
import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";

const FollowerWrap = styled.div`
  width: 100%;
`;

export default function FollowersPage() {
  const [followerList, setFollowerList] = useState([]);
  const token = localStorage.getItem("token");
  const accountname = localStorage.getItem("accountname");
  const url = `${BASE_URL}/profile/${accountname}/follower`;
  const getFollowerList = () => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        setFollowerList(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFollowerList();
  }, []);

  return (
    <FollowerWrap>
      <Header type="followers" />
      <FollowerCards followerList={followerList} />
      <NavBar />
    </FollowerWrap>
  );
}
