import React from "react";
// import axios from "axios";
import styled from "styled-components";
// import API from "../utils/api";

import Header from "../components/style/Header";
import FollowerCards from "../components/follow/FollowerCards";
import NavBar from "../components/style/NavBar";

const FollowerWrap = styled.div`
  width: 100%;
`;

export default function FollowersPage() {
  //   const [followerList, setFollowerList] = useState([]);

  //   const token = localStorage.getItem("token");

  //   const accountname = localStorage.getItem("accountname");

  //   const url = `${API}profile/${accountname}/follower`;

  //   const getFollowerList = () => {
  //     axios
  //       .get(url, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-type": "application/json",
  //         },
  //       })
  //       .then((response) => {
  //         setFollowerList(response.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   useEffect(() => {
  //     getFollowerList();
  //   }, []);

  return (
    <FollowerWrap>
      <Header type="followers" />
      <FollowerCards />
      <NavBar />
    </FollowerWrap>
  );
}
