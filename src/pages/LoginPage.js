import { Outlet } from "react-router-dom"
import styled from "styled-components";
// import Email from "../components/login/Email";
// import Form from "../components/login/Form";
// import Login from "../components/login/Login";
// import Form from "../components/login/Form";
// import ProfileSetting from "../components/common/ProfileSetting";
import LayoutSection from "../components/style/PageLayout";

const BackgroundDiv = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  height: 100%;
`;

export default function LoginPage() {

  return (
    <BackgroundDiv>
      <LayoutSection>
        {/* www.naver.com/ */}
        <h1 className="sr-only">로그인 페이지</h1>
        <Outlet></Outlet>
        {/* <Login/> */}
        {/* 이메일로 로그인인 */}
        {/* www.naver.com/login */}
        {/* <Form title={"로그인"} buttonText={"로그인"} /> */}
        {/*  */}
        {/* <Form title={"이메일로 회원가입"} buttonText={"다음"} /> */}
        {/*  */}
        {/* <ProfileSetting title={"프로필 설정"} /> */}
      </LayoutSection>
    </BackgroundDiv>
  );
}
