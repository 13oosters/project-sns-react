import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import API from "../utils/api";
import Header from "../components/style/Header";
// import Notice from "../components/common/Notice"
import NavBar from "../components/style/NavBar";
// import Cards from "../components/common/Cards";
import EmptyFeed from "../components/home/EmptyFeed";
import Feeds from "../components/home/Feeds";
import Modal from "../components/common/Modal";

export default function HomePage() {

  const [feed, setFeed] = useState([]); // 팔로우한 사람들 + 나의 게시물 데이터
  const [callNumber, setCallNumber] = useState(50);
  const [myCallNumber, setMyCallNumber] = useState(5);
  
  const getUserFeed = async() => {
    const response = await API.get(`/post/feed/?limit=${callNumber}`,{
      header: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      }
    });
    const result = await response.data.posts;

    return result;

  }

  const getMyPost = async(data) => {

    const response = await API.get("/user/myinfo", {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    });
    const result = await response.data;
    const myId = result.user.accountname;

    const myPosting = await API.get(`/post/${myId}/userpost/?limit=${myCallNumber}`,{
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    });
    const myPostingResult = await myPosting.data;

    const temp = [...data, ...myPostingResult.post];
  
    setFeed(temp);

  }

  useEffect(()=>{
    getUserFeed().then((data) => getMyPost(data));
    
  },[])

  return (
    <section>
      <Header type="logo" />
      {/* new */}
      {/* feed 날짜가 최신일수록 가장 상단에 위치하도록 sort 코드 작성 */}
      {feed.length >= 0 ? <Feeds feed={feed.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))}/> : <EmptyFeed/>}
      <NavBar type="홈"/>
    </section>
  );
}