// import { useNavigate } from "react-router-dom";

// import Form from "../components/login/Form";
import React from "react";
import Welcome from "../components/login/Welcome";
import PageLayout from "../components/style/PageLayout";

export default function LoginPage() {
  /*   return (
    <PageLayout paddingValue={3.4}>
      <Form title="로그인" buttonText="로그인" />
      <Outlet title="로그인" buttonText="로그인" />
    </PageLayout>
  ); */

  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">로그인 페이지</h1>
      <Welcome />
    </PageLayout>
  );

  // return (
  //   <PageLayout paddingValue={3.4}>
  //     <Form title="이메일로 회원가입" buttonText="다음" />
  //   </PageLayout>
  // );

  /*   return (
    {
      if(isLoginClicked){
      }
      }
    }
   
  ); */
}
