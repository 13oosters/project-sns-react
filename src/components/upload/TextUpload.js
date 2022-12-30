import React from "react";
import styled from "styled-components";

const UploadTextarea = styled.textarea`
  display: block;
  padding: 3.2rem 3.5rem 3.2rem 7rem;
  border: 0;
  width: 100%;
  height: 20rem;
  //  height: calc(100%-210rem);
  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 10px;
  }

  &::placeholder {
    color: #c4c4c4;
    font-size: ${(props) => props.theme.baseFontSize};
  }
  &:focus {
    border-radius: 1rem;
    outline: none;
  }
`;

export default function TextUpload({ userData, type }) {
  const { post } = { ...userData };

  if (type === "upload") {
    return (
      <UploadTextarea
        required
        rows="5"
        cols="33"
        placeholder="게시글 입력하기.."
      ></UploadTextarea>
    );
  } else if (type === "edit") {
    return (
      <UploadTextarea
        defaultValue={post.content}
        required
        rows="5"
        cols="33"
        placeholder="게시글 입력하기.."
      ></UploadTextarea>
    );
  }
}
