import { useState } from "react";
import PageLayout from "../components/style/PageLayout";
import Welcome from "../components/login/Welcome";
import Form from "../components/login/Form";
import ProfileSetting from "../components/common/ProfileSetting";

export default function LoginPage({ login, signin, settings, setHasToken }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    accountname: "",
    intro: "",
    image: "https://mandarin.api.weniv.co.kr/Ellipse.png",
  });

  if (login) {
    return (
      <PageLayout>
        <h1 className="sr-only">로그인 페이지</h1>
        <Form
          title="로그인"
          buttonText="로그인"
          userData={userData}
          setUserData={setUserData}
          setHasToken={setHasToken}
        />
      </PageLayout>
    );
  }
  if (signin) {
    return (
      <PageLayout>
        <h1 className="sr-only">회원가입 페이지</h1>
        <Form
          title="이메일로 회원가입"
          buttonText="다음"
          userData={userData}
          setUserData={setUserData}
          setHasToken={setHasToken}
        />
      </PageLayout>
    );
  }
  if (settings) {
    return (
      <PageLayout>
        <ProfileSetting
          title="프로필 설정"
          userData={userData}
          setUserData={setUserData}
        />
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <h1 className="sr-only">로그인 페이지</h1>
      <Welcome />
    </PageLayout>
  );
}
