import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/style/Header";
import Posting from "../components/upload/Posting";
import PageLayout from "../components/style/PageLayout";
import API from "../utils/api";
import postData from "../utils/postData";

export default function UploadPage() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    accountname: "",
    intro: "",
    image: "https://mandarin.api.weniv.co.kr/Ellipse.png",
  });
  const [cardData, setCardData] = useState("");
  const getUserData = async () => {
    const response = await API("/user/myinfo", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return response.data.user;
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/upload") {
      getUserData().then((user) => {
        setUserData({
          ...userData,
          accountname: user.accountname,
          image: user.image,
        });
      });
    } else {
      const [, , , postId] = location.pathname.split("/");

      postData("editpost", postId, setCardData);
    }
  }, []);
  // location.pathname === "/upload"
  return (
    <>
      <PageLayout paddingValue={0}>
        <h1 className="sr-only">게시글 업로드 페이지</h1>
        <Header type="post" />

        {location.pathname === "/upload" ? (
          <Posting
            type="upload"
            userData={userData}
            setUserData={setUserData}
          />
        ) : (
          <>
            {cardData ? (
              <Posting
                type="edit"
                userData={cardData}
                setUserData={setCardData}
              />
            ) : (
              <></>
            )}
          </>
        )}
      </PageLayout>
    </>
  );
}

// /upload
//   //   postData("editpost", postId, );
// http://localhost:3000/iguana13/post/63a94b7b17ae6665811fc672/edit

// const {location.pathnemnmaname} = useParams()
// console.log(pathname)
