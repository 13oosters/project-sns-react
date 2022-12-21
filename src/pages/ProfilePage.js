import React from "react";

import Header from "../components/common/Header";
import UserBio from "../components/profile/UserBio";
import Cards from "../components/common/Cards";
import NavBar from "../components/style/NavBar";

export default function ProfilePage() {
  return (
    <>
      <h1 className="sr-only">프로필 페이지</h1>
      <Header type="profile" />
      <UserBio />
      <Cards />
      <NavBar type="프로필" />
    </>
  );
}
