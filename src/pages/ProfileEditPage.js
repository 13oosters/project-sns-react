import React, { useState, useEffect } from "react";

import ProfileSetting from "../components/common/ProfileSetting";
import PageLayout from "../components/style/PageLayout";
import Header from "../components/style/Header";
import API from "../utils/api";

export default function ProfileEditPage() {
  const [userData, setUserData] = useState({
    username: "",
    accountname: "",
    intro: "",
    image: "userData.image",
  });
  const accountname = localStorage.getItem("accountname");
  const token = localStorage.getItem("token");
  const getMyInfo = async () => {
    const res = await API.get(`/profile/${accountname}`, {
      header: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const response = await res.data;

    const { profile } = { ...response };

    setUserData({
      ...userData,
      username: profile.username,
      accountname: profile.accountname,
      intro: profile.intro,
      image: profile.image,
    });
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <>
      <PageLayout>
        <Header type="post" />
        <ProfileSetting userData={userData} setUserData={setUserData} />
      </PageLayout>
    </>
  );
}
