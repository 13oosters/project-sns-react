import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Header from "../components/style/Header";
import Detail from "../components/post/Detail";
import postData from "../utils/postData";
import LayoutSection from "../components/style/PageLayout";
import Writing from "../components/post/Writing";
import API from "../utils/api";

export default function PostPage() {
  const { id } = useParams();
  const [postPageData, setPostPageData] = useState("");
  const [myInfo, setMyInfo] = useState("");
  const getMyInfo = async () => {
    const response = await API.get("/user/myinfo", {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
    const responseData = await response.data;

    setMyInfo(responseData);
  };

  useEffect(() => {
    postData("detailpost", id, setPostPageData);
    getMyInfo();
  }, []);

  return (
    <>
      <LayoutSection>
        <h1 className="sr-only">게시글 상세보기</h1>
        <Header type="post" />
        {postData && myInfo ? (
          <>
            <Detail
              postPageData={postPageData}
              setPostPageData={setPostPageData}
              myInfo={myInfo}
            />
            <Writing setPostPageData={setPostPageData} myInfo={myInfo} />
          </>
        ) : (
          <></>
        )}
      </LayoutSection>
    </>
  );
}
