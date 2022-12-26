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

export default function HomePage() {

  const [feed, setFeed] = useState([]); // 팔로우한 사람들의 게시물 데이터

  console.log(3, feed)
  
  const getUserFeed = async() => {
    console.log(1, feed)
    await API.get("/post/feed/?limit=100",{
      header: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      }
    }).then((res) => res.data.posts).then((res) => setFeed(res))

    return feed;
  }

  const getMyPost = async() => {
    console.log(2, feed)
    // await getUserFeed();
    const response = await API.get("/user/myinfo", {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    });
    const result = await response.data;
    const myId = result.user.accountname;

    const myPosting = await API.get(`/post/${myId}/userpost/?limit=100`,{
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    });
    const myPostingResult = await myPosting.data;

    console.log(myPostingResult.post)

    // console.log(myPostingResult.post);
//    console.log(feed);

    const temp = [...feed, ...myPostingResult.post];
    
    console.log(temp);

//    temp.push(...myPostingResult.post);
  
    setFeed(temp);
    return temp
    
  }

  // console.log(feed);

  // const {posts} = {...feed};

  // console.log(posts);

  useEffect(()=>{
    getUserFeed().then((res) => getMyPost())
    // Promise.allSettled()
  },[])
/*   useEffect(()=>{
    getMyPost()
  },[feed]) */

  return (
    <section>
      <Header type="logo"/>
      {/* new */}
      {/* <EmptyFeed/> */}
      <Feeds feed={feed}/>
      {/* feeds */}
      {/* <Cards/> */}
      <NavBar type="홈"/>
    </section>
  );
}