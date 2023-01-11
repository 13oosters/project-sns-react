import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Header from "../components/style/Header";
import Detail from "../components/post/Detail";
import postData from "../utils/postData";
import LayoutSection from "../components/style/PageLayout";

export default function PostPage() {
  const { id } = useParams();

  const [postPageData, setPostPageData] = useState("");

  useEffect(() => {
    postData("detailpost", id, setPostPageData);
  }, []);

  return (
    <>
      {postData ? (
        <>
          <LayoutSection>
            <h1 className="sr-only">게시글 상세보기</h1>
            <Header type="post" />
            <Detail
              postPageData={postPageData}
              setPostPageData={setPostPageData}
            />
          </LayoutSection>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
