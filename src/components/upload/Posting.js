import React from "react";
import styled from "styled-components";

import ImageUpload from "./ImageUpload";
import TextUpload from "./TextUpload";
import Button from "../style/Button";

import PageLayout from "../style/PageLayout";

const UploadButton = styled(Button)`
  margin: 2rem 2rem 2rem auto;
  width: 9rem;
  font-size: ${(props) => props.theme.baseFontSize};
  font-weight: ${(props) => props.theme.mediumFontWeight};
`;

export default function Posting({ userData, setUserData }) {
  return (
    <PageLayout paddingValue={0}>
      <h2 className="sr-only">게시글 작성</h2>
      <form>
        <ImageUpload userData={userData} />
        <TextUpload />
        <UploadButton type="submit">업로드</UploadButton>
      </form>
    </PageLayout>
  );
}
