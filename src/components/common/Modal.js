import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";

import postData from "../../utils/postData";

const ModalSection = styled.section`
  position: fixed;
  left: 0;
  right: 0;
`;

const ModalDiv = styled.div`
  display: block;
  position: fixed;
  left: 0;
  right: 0;
  bottom: -45rem;
  max-width: 50.1rem;
  height: 19.3rem;
  z-index: 1000;
  margin: 0 auto;
  opacity: 1;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  text-align: center;
  transform: ${(props) =>
    !props.modal ? "translateY(130%)" : "translateY(-210%)"};
  transition: 0.5s;
`;

const ModalUl = styled.ul`
  font-size: ${(props) => props.theme.largeFontSize};
  font-weight: ${(props) => props.theme.normalFontWeight};
`;

const ModalLi = styled.li`
  padding: 1.5rem 1.6rem;
  text-align: left;
  cursor: pointer;
  text-align: center;
  &:nth-child(-n + 2) {
    border-bottom: 1px solid #dbdbdb;
  }
`;

export default function Modal({
  modal,
  isModal,
  type,
  commentId,
  postId,
  setPostPageData,
  accountname,
  setFeed,
  fullArray,
  setHasToken,
}) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const currentURL = useLocation();
  const BASE_URL = "localhost:3000";

  const cancel = () => {
    isModal((prev) => !prev);
  };
  const deletePost = (idPost) => {
    postData("deletepost", postId, setPostPageData);
    isModal((prev) => !prev);
    setFeed([...fullArray].filter((v) => v.id !== postId));
    // 삭제하면 홈으로 이동
    navigate("/");
  };

  const editPost = (e) => {
    cancel();
    if (type === "myhome") {
      navigate(`${accountname}/post/${postId}/edit`);
    } else {
      navigate("edit");
    }
  };

  // type, url, setPostData, comment, id, commentId
  const postReport = () => {
    postData("postReport", postId, setMessage);
    isModal((prev) => !prev);
    // const { report } = { ...message };

    // alert(` ${report.post} 게시물 신고가 완료 되었습니다.`);
  };

  const deleteComment = () => {
    postData("deletComment", postId, setPostPageData, "", commentId);
    cancel();

    console.log(message);
  };

  const commentReport = () => {
    postData("commentReport", postId, setMessage, "", commentId);
    cancel();
  };
  const a = () => {
    if (modal === true) {
      cancel();
    }
  };
  const logout = () => {
    cancel();
    localStorage.removeItem("token");
    localStorage.removeItem("accountname");
    setHasToken(false);
    navigate("/");
  };
  const share = async () => {
    const clip = BASE_URL + currentURL.pathname;

    try {
      await navigator.clipboard.writeText(clip);
      alert("클립보드에 복사되었습니다");
    } catch (e) {
      alert("복사가 실패되었습니다");
    }
  };
  const ModalUI = {
    myprofile: (
      <>
        <ModalLi onClick={logout}>로그아웃</ModalLi>
      </>
    ),
    otherprofile: (
      <>
        <ModalLi onClick={share}>공유하기</ModalLi>
      </>
    ),
    myprofilepost: (
      <>
        <ModalLi onClick={deletePost}> 삭제하기</ModalLi>
        <ModalLi onClick={editPost}> 수정하기</ModalLi>
      </>
    ),
    myhome: (
      <>
        <ModalLi onClick={editPost}>수정</ModalLi>
        <ModalLi onClick={deletePost}>삭제</ModalLi>
      </>
    ),
    mypost: (
      <>
        <ModalLi onClick={editPost}>수정</ModalLi>
        <ModalLi onClick={deletePost}>삭제</ModalLi>
      </>
    ),
    mycomment: <ModalLi onClick={deleteComment}>삭제</ModalLi>,
    otherpost: <ModalLi onClick={postReport}>게시물 신고하기</ModalLi>,
    othercomment: <ModalLi onClick={commentReport}>댓글 신고하기</ModalLi>,
  };

  console.log(modal);
  return (
    <ModalSection modal={modal} onClick={cancel}>
      <h2 className="sr-only">모달창</h2>
      <ModalDiv modal={modal}>
        <ModalUl>
          {ModalUI[type]}
          <ModalLi>취소</ModalLi>
        </ModalUl>
      </ModalDiv>
    </ModalSection>
  );
}
//  <img src={ModalImage} alt="모달창 아이콘" />
