import React, { useState } from "react";
import { useNavigate } from "react-router";
import postData from "../utils/postData";
import PostPage from "./PostPage";

// 여기서 버튼을 누르면 get할 수 있도록 한다.

export default function 임시홈() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("post/63a4953917ae666581f0ccd2");
  };

  return <button onClick={onClick}>1번게시글 입 니 다 눌러봐</button>;
}
