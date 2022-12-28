import React from "react";
import styled from "styled-components";
// import axios from "axios";
// import API from "../utils/api";

import Header from "../components/style/Header";
import FollowingCards from "../components/follow/FollowingCards";
import NavBar from "../components/style/NavBar";

const FollowingWrap = styled.div`
  width: 100%;
`;

export default function FollowingsPage() {
  //   const [followingList, setFollowingList] = useState([]);
  //   const token = localStorage.getItem("token");
  //   const accountname = localStorage.getItem("accountname");
  /*  const getFollowingList = () => {
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
 */
  /*   useEffect(() => {
    getFollowingList();
  }, []); */

  return (
    <FollowingWrap>
      <Header type="followings" />
      <FollowingCards />
      <NavBar />
    </FollowingWrap>
  );
}
