import React from "react";
import Header from "../components/style/Header";
import FollowingCards from "../components/follow/FollowingCards";

export default function FollowingsPage() {
  return (
    <>
      <Header type="followings" />
      <FollowingCards />
    </>
  );
}
