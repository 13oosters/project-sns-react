import React from "react";
import Header from "../components/style/Header";
// import Notice from "../components/common/Notice"
import NavBar from "../components/style/NavBar";
// import Cards from "../components/common/Cards";
// import EmptyFeed from "../components/home/EmptyFeed";
import Feeds from "../components/home/Feeds";

export default function HomePage() {
  return (
    <section>
      <Header type="logo"/>
      {/* new */}
      {/* <EmptyFeed/> */}
      <Feeds/>
      {/* feeds */}
      {/* <Cards/> */}
      <NavBar type="홈"/>
    </section>
  );
}
