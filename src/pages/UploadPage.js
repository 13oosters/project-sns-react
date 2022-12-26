import React, { useState, useEffect } from "react";

import Posting from "../components/upload/Posting";
import PageLayout from "../components/style/PageLayout";
import API from "../utils/api";

export default function UploadPage() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    accountname: "",
    intro: "",
    image: "https://mandarin.api.weniv.co.kr/Ellipse.png",
  });
  const getUserData = async () => {
    const response = await API("/user/myinfo", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return response.data.user;
  };

  useEffect(() => {
    getUserData().then((user) => {
      setUserData({
        ...userData,
        accountname: user.accountname,
        image: user.image,
      });
    });
  }, []);

  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">게시글 업로드 페이지</h1>
      <Posting userData={userData} setUserData={setUserData} />
    </PageLayout>
  );
}
