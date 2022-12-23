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

  const [feed, setFeed] = useState([]);

  const getUserFeed = async() => {
    await API.get("/post/feed",{
      header: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      }
    }).then((res) => res.data)
    .then((res) => setFeed({...res}));
  }

  // console.log(feed);


  // const {posts} = {...feed};

  // console.log(posts);

  useEffect(()=>{
    getUserFeed();
  },[])

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
