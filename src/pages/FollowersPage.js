import React from "react";
import FollowerCards from "../components/follow/FollowerCards";
import Header from "../components/style/Header";

export default function FollowersPage() {
  return (
    <>
      <Header type="followers" />
      <FollowerCards />
    </>
  );
}
