import React from "react";
import PostPage from "./PostPage";

import Header from "../components/style/Header";
import Cards from "../components/common/Cards";
import NavBar from "../components/style/NavBar";
import ProfileInformation from "../components/profile/ProfileInformation";
import SortButtons from "../components/profile/SortButtons";

export default function ProfilePage() {
  return (

    <section>
      <h1 class="sr-only">프로필 페이지</h1>
      <Header type="profile" />
      <ProfileInformation />
      <SortButtons />
      <Cards />
      <NavBar />
    </section>

  );
}
