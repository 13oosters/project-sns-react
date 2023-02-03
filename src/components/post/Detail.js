import React from "react";
import styled from "styled-components";
import Card from "../common/Card";
import Dialog from "../post/Dialog";

const DeatailSection = styled.section`
  position: relative;
  height: calc(100% - 120px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Detail({ setPostPageData, postPageData, myInfo }) {
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
            myInfo={myInfo}
          />
        </DeatailSection>
      ) : (
        <></>
      )}
    </>
  );
}
