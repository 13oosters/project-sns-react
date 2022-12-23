import React, { useState } from "react";

import Posting from "../components/upload/Posting";

import PageLayout from "../components/style/PageLayout";

export default function UploadPage() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    accountname: "",
    intro: "",
    image: "https://mandarin.api.weniv.co.kr/Ellipse.png",
  });

  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">게시글 업로드 페이지</h1>
      <Posting userData={userData} setUserData={setUserData} />
    </PageLayout>
  );
}
