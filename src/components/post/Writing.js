import React, { useState } from "react";
import styled from "styled-components";

import profileImage from "../../assets/image/basic-profile-img-post.png";
import postData from "../../utils/postData";

const WriteSection = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.lightColor};
  padding: 1rem 1.2rem 0 1.2rem;
`;

const UserImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
`;
const WritingForm = styled.form`
  display: inherit;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin-left: 1.8rem;
`;

const WritingTextarea = styled.textarea`
  width: 100%;
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
  width: 5rem;
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
  color: #c4c4c4;
`;

export default function Writing({ id, comments, setPostStoreData }) {
  const [inputComment, setInputComment] = useState("");

  const getComment = (e) => {
    setInputComment(e.target.value);
  };
  const uploadcomment = () => {
    postData("comment", `${id}`, setPostStoreData, inputComment);
    console.log(comments);
    setInputComment("");
  };

  return (
    <WriteSection>
      <h4 class="sr-only">댓글 입력창</h4>
      <UserImage src={profileImage} alt="사용자 프로필 사진" />
      <WritingForm>
        <WritingTextarea
          value={inputComment}
          required
          placeholder="댓글 입력하기.."
          onChange={getComment}
        />
        <UpLoadButton type="button" onClick={uploadcomment}>
          게시
        </UpLoadButton>
      </WritingForm>
    </WriteSection>
  );
}
