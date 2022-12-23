import React from "react";
import styled from "styled-components";

import Card from "../common/Card";
import Dialog from "../post/Dialog";

const DeatailSection = styled.section`
  margin-top: 4rem;
`;

export default function Detail({ setIsModal, postStoreData, id }) {
  /** 유저정보는 공통 card에서 가져오기..? */
  const { post } = { ...postStoreData };
  const { comments } = { ...postStoreData };

  return (
    <DeatailSection>
      <h2 class="sr-only">게시글</h2>
      <Card setIsModal={setIsModal} post={post} />
      <Dialog comments={comments} id={id} />
    </DeatailSection>
  );
}
