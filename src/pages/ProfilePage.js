import React from "react";

import Header from "../components/common/Header";
import UserBio from "../components/profile/UserBio";
import Cards from "../components/common/Cards";
import NavBar from "../components/style/NavBar";

export default function ProfilePage() {
  return (
    <section>
      <h1 class="sr-only">프로필 페이지</h1>
      <Header type="profile" />
      <UserBio />
      <Cards />
      <NavBar />
    </section>
  );
}
