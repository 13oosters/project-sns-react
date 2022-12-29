import React, { useState } from "react";
import ProfileSetting from "../components/common/ProfileSetting";
import PageLayout from "../components/style/PageLayout";
import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";

export default function ProfileEditPage() {
  const [userData, setUserData] = useState({
    username: "",
    accountname: "",
    intro: "",
    image: "userData.image",
  });

  return (
    <PageLayout paddingValue={3.4}>
      <Header type="settings" />
      <ProfileSetting userData={userData} setUserData={setUserData} />
      <NavBar />
    </PageLayout>
  );
}