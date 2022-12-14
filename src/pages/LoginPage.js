import React from "react";
import Logo from "../components/common/Logo";
import Login from "../components/login/Login";
import Form from "../components/login/Form";
import ProfileSetting from "../components/common/ProfileSetting";
import PageLayout from "../components/style/PageLayout";

export default function LoginPage() {
  return (
    <PageLayout paddingValue={34}>
      {/* www.naver.com/ */}
      <h1 className="sr-only">로그인 페이지</h1>
      <Logo />
      <Login />
      {/* 이메일로 로그인인 */}
      {/* www.naver.com/login */}
      <Form title={"로그인"} buttonText={"로그인"} />
      {/*  */}
      <Form title={"이메일로 회원가입"} buttonText={"다음"} />
      {/*  */}
      <ProfileSetting title={"프로필 설정"} />
    </PageLayout>
  );
}
