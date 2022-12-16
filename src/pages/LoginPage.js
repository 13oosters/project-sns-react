// import Form from "../components/login/Form";
// import React from "react";
import PageLayout from "../components/style/PageLayout";
import Welcome from "../components/login/Welcome";
import Form from "../components/login/Form";

export default function LoginPage({ login, signin }) {
  if (login) {
    return (
      <PageLayout paddingValue={3.4}>
        <h1 className="sr-only">로그인 페이지</h1>
        <Form title="로그인" buttonText="로그인" />
      </PageLayout>
    );
  }
  if (signin) {
    return (
      <PageLayout paddingValue={3.4}>
        <h1 className="sr-only">회원가입 페이지</h1>
        <Form title="이메일로 회원가입" buttonText="다음" />
      </PageLayout>
    );
  }
  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">로그인 페이지</h1>
      <Welcome />
    </PageLayout>
  );

  /*   return (
    <PageLayout paddingValue={3.4}>
      <Form title="로그인" buttonText="로그인" />
      <Outlet title="로그인" buttonText="로그인" />
    </PageLayout>
  ); */
  /* 
  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">로그인 페이지</h1>
      <Welcome />
    </PageLayout>
  ); */

  // return (

  // );

  /*   return (
    {
      if(isLoginClicked){
      }
      }
    }
   
  ); */
}
