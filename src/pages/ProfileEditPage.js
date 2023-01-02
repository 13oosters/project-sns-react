import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  // /profile/:accountname
  const navigate = useNavigate();
  const accountname = localStorage.getItem("accountname");
  const token = localStorage.getItem("token");
  const getMyInfo = async () => {
    try {
      const res = await API.get(`/profile/${accountname}`, {
        header: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const response = await res.data;

      const { profile } = { ...response };

      console.log(response);
      console.log(profile);
      setUserData({
        ...userData,
        username: profile.username,
        accountname: profile.accountname,
        intro: profile.intro,
        image: profile.image,
      });
    } catch {
      alert(
        "해당 프로필을 찾을 수 없습니다. 다시 확인 후 조회하여 주십시오. 😥",
      );
      navigate(-1);
    }
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
