import React, { useState } from "react";
import Form from "../components/login/Form";

import Welcome from "../components/login/Welcome";
import PageLayout from "../components/style/PageLayout";

export default function LoginPage() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  if (isLoginClicked) {
    return (
      <PageLayout paddingValue={3.4}>
        <Form title="로그인" buttonText="로그인"></Form>
      </PageLayout>
    );
  }
  if (isSignupClicked) {
    return (
      <PageLayout paddingValue={3.4}>
        <Form title="이메일로 회원가입" buttonText="다음" />
      </PageLayout>
    );
  }
  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">로그인 페이지</h1>
      <Welcome
        setIsLoginClicked={setIsLoginClicked}
        setIsSignupClicked={setIsSignupClicked}
      />
    </PageLayout>
  );

  /*   return (
    {
      if(isLoginClicked){

      }
      else if(isSignupClicked){
        <PageLayout paddingValue={0}>
        <h1 className="sr-only">로그인 페이지</h1>
        <Welcome
          setIsLoginClicked={setIsLoginClicked}
          setIsSignupClicked={setIsSignupClicked}/>
      </PageLayout>
      }
      else{

      }
    }
   
  ); */
}
