import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../utils/api";

import Header from "../components/style/Header";
import FollowingCards from "../components/follow/FollowingCards";
import NavBar from "../components/style/NavBar";

export default function FollowingsPage() {
  const [followingList, setFollowingList] = useState([]);
  const token = localStorage.getItem("token");
  const accountname = localStorage.getItem("accountname");
  const url = `${API}/profile/${accountname}/following`;
  const getFollowingList = () => {
    axios
      .get(url, {
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

  return (
    <div className="followerWrap">
      <Header type="followings" />
      <FollowingCards followingList={followingList} />
      <NavBar />
    </div>
  );
}
