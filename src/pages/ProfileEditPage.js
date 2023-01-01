import React, { useState } from "react";
import ProfileSetting from "../components/common/ProfileSetting";
import PageLayout from "../components/style/PageLayout";
import Header from "../components/style/Header";

export default function ProfileEditPage() {
  const [userData, setUserData] = useState({
    username: "",
    accountname: "",
    intro: "",
    image: "userData.image",
  });

  return (
    <PageLayout>
      <Header type="post" />
      <ProfileSetting userData={userData} setUserData={setUserData} />
    </PageLayout>
  );
}
