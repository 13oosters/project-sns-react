import React from "react";
import styled from "styled-components";

import Card from "../common/Card";
import Dialog from "../post/Dialog";

const DeatailSection = styled.section`
  margin-top: 4rem;
`;

export default function Detail({
  setIsModal,
  postStoreData,
  id,
  setPostStoreData,
}) {
  const { post } = { ...postStoreData };

  return (
    <DeatailSection>
      <h2 class="sr-only">게시글</h2>
      <Card setIsModal={setIsModal} post={post} />
      <Dialog
        id={id}
        postStoreData={postStoreData}
        post={post}
        setPostStoreData={setPostStoreData}
      />
    </DeatailSection>
  );
}
