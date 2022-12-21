import React from "react";
import styled from "styled-components";

import profileImage from "../../assets/image/basic-profile-img-post.png";

const WriteSection = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.lightColor};
  padding: 1.3rem 0;
`;

const UserImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
`;
const WritingForm = styled.form`
  display: inherit;
  justify-content: space-between;
  width: 100%;
  margin-left: 1.8rem;
`;

const WritingTextarea = styled.textarea`
  width: 90%;
  overflow: hidden;
  margin: 1rem 0;
  border: 0;
  padding: 1.5rem 0 0 1rem;
  &::placeholder {
    color: #c4c4c4;
  }
  &:focus {
    outline: 1px solid ${(props) => props.theme.darkLightColor};
    border-radius: 0.4rem;
  }
`;

const UpLoadButton = styled.button`
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
  color: #c4c4c4;
`;

export default function Writing() {
  return (
    <WriteSection>
      <h4 class="sr-only">댓글 입력창</h4>
      <UserImage src={profileImage} alt="사용자 프로필 사진" />
      <WritingForm method="post">
        <WritingTextarea required placeholder="댓글 입력하기.." />
        <UpLoadButton type="submit">게시</UpLoadButton>
      </WritingForm>
    </WriteSection>
  );
}
