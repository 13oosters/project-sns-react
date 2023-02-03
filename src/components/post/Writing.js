import React, { useState } from "react";
import { useParams } from "react-router-dom";
import postData from "../../utils/postData";
import {
  WriteSection,
  UserImage,
  WritingForm,
  WritingTextarea,
  UpLoadButton,
} from "../style/post/commentInput";

export default function Writing({ setPostPageData, myInfo }) {
  const [inputComment, setInputComment] = useState("");
  const { id } = useParams();
  const getComment = (e) => {
    setInputComment(e.target.value);
  };
  const uploadcomment = () => {
    if (inputComment) {
      postData("comment", `${id}`, setPostPageData, inputComment);
      setInputComment("");
    }
  };

  return (
    <WriteSection>
      <h4 className="sr-only">댓글 입력창</h4>
      <UserImage src={myInfo.user.image} alt="사용자 프로필 사진" />
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
