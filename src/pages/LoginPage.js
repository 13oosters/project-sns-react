import React, { useState } from "react";

import Welcome from "../components/login/Welcome";
import PageLayout from "../components/style/PageLayout";

export default function LoginPage() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isSignupClicked, setIsSignupClicked] = useState(false);
  const [a, b] = [isSignupClicked, isLoginClicked];

  console.log(a, b);
  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">로그인 페이지</h1>
      <Welcome
        setIsLoginClicked={setIsLoginClicked}
        setIsSignupClicked={setIsSignupClicked}
      />
    </PageLayout>
  );
}
