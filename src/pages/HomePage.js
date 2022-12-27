import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
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
  const [callNumber, setCallNumber] = useState(10);
  const [myCallNumber, setMyCallNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const getUserFeed = useCallback(async(follow, my) => {
    setLoading(true);

    try{
    // 내가 팔로우한 사람들의 게시글 목록 데이터 불러오기
    {
    const response = await API.get(`/post/feed/?limit=${follow}`,{
      header: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      }
    });

    // 나의 유저정보를 알기 위해 프로필 정보중 accountname 불러오기
    // const myResponse = await API.get("/user/myinfo", {
    //   "Authorization": `Bearer ${localStorage.getItem("token")}`,
    // });
    // const myResult = await myResponse.data;

    const myId = localStorage.getItem("accountname");

    // 불러온 accountname을 통해 내가 올린 게시글 불러오기
    const myPosting = await API.get(`/post/${myId}/userpost/?limit=${my}`,{
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    });
  
    // 내가 팔로우한 사람들의 게시글과 내가올린 게시글 합치기
    // const temp = [...result, ...myPostingResult.post];

    const result = await Promise.all([response, myPosting]);
    const addFeed = [...result[0].data.posts, ...result[1].data.post];

    setFeed(addFeed);
  }
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
  }, [callNumber])


  // useEffect(()=>{
  //   getUserFeed(callNumber, myCallNumber);

  // },[])

// 무한스크롤
  const [ref, inView] = useInView();
  // inView값은 ref걸어놓은 div가 화면상에 보일때 true가 된다.

  // console.log(inView);
  // console.log(loading);
  // console.log(callNumber);
  // console.log(myCallNumber);
  console.log(feed);

  useEffect(()=>{
    if(inView && !loading){
      setCallNumber(callNumber + 1);
      setMyCallNumber(myCallNumber + 1);
    }
  },[inView, loading])

  useEffect(()=>{
    getUserFeed(callNumber, myCallNumber);
  },[getUserFeed])

  return (
    <section>
      <Header type="logo" />
      {/* new */}
      {/* feed 날짜가 최신일수록 가장 상단에 위치하도록 sort 코드 작성 */}
      {feed.length > 0 ? <Feeds feed={feed.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))}/> : <EmptyFeed/>}
      <div ref={ref}>로딩</div>
      <NavBar type="홈"/>
    </section>
  );
}