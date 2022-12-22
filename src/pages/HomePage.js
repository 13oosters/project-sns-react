import { useEffect } from "react";
import axios from "axios";
import Header from "../components/style/Header";
// import Notice from "../components/common/Notice"
import NavBar from "../components/style/NavBar";
// import Cards from "../components/common/Cards";
import EmptyFeed from "../components/home/EmptyFeed";
import Feeds from "../components/home/Feeds";

export default function HomePage() {

  // const getUserFeed = async() => {
  //   await axios.get("https://mandarin.api.weniv.co.kr/post/feed",{
  //     header: {
  //       "Authorization": `Bearer ${localStorage.getItem("token")}`,
  //       "Content-type": "application/json",
  //     }
  //   }).then((res) => {console.log(res)});
  // }

  // useEffect(()=>{
  //   getUserFeed();
  // },[])

  return (
    <section>
      <Header type="logo"/>
      {/* new */}
      <EmptyFeed/>
      {/* <Feeds/> */}
      {/* feeds */}
      {/* <Cards/> */}
      <NavBar type="홈"/>
    </section>
  );
}
