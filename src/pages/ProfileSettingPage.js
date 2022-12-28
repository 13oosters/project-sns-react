import React from "react";
import ProfileSetting from "../components/common/ProfileSetting";
import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";

export default function ProfileSettingPage() {
  return (
    <div>
      <Header type="settings" />
      <ProfileSetting />
      <NavBar />
    </div>
  );
}
