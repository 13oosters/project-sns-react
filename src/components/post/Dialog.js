import React from "react";
import styled from "styled-components";

import Comments from "./Comments";
import Writing from "./Writing";

const DialogSection = styled.section`
  padding: 10rem 1.6rem 0;
`;

export default function Dialog({ id, postStoreData, setPostStoreData }) {
  const { comments } = { ...postStoreData };

  console.log(comments);
  return (
    <DialogSection>
      <h3 class="sr-only">댓글 창</h3>
      <Comments comments={comments} />
      <Writing
        id={id}
        comments={comments}
        postStoreData={postStoreData}
        setPostStoreData={setPostStoreData}
      />
    </DialogSection>
  );
}
