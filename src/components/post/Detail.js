import React from "react";
import styled from "styled-components";
import Card from "../common/Card";
import Dialog from "../post/Dialog";

const DeatailSection = styled.section`
  height: calc(100% - 48px);
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`;

// setPostStoreData 사용안하면 지우기
export default function Detail({ setPostPageData, postPageData }) {
  const { post } = { ...postPageData };

  const { comments } = { ...postPageData };

  return (
    <>
      {post ? (
        <DeatailSection>
          <h2 className="sr-only">게시글</h2>
          <Card post={post} />
          <Dialog
            postPageData={postPageData}
            post={post}
            setPostPageData={setPostPageData}
            comments={comments}
          />
        </DeatailSection>
      ) : (
        <></>
      )}
    </>
  );
}
