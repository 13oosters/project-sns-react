import React from "react";
import Welcome from "../components/login/Welcome";

import PageLayout from "../components/style/PageLayout";

export default function LoginPage() {
  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">로그인 페이지</h1>
      <Welcome />
    </PageLayout>
  );
}
