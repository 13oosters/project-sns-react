import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

import ModalImage from "../../assets/image/icon-modal.png";
import postData from "../../utils/postData";

const ModalDiv = styled.div`
  display: ${(props) => (!props.isModal ? "none" : "block")};
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0%;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1.6rem 0 1rem 2.6rem;
  text-align: center;
  transform: translateY(0);
  transition: all 1s;
`;

const ModalLi = styled.li`
  padding: 1.4rem 2.6rem;
  font-size: ${(props) => props.theme.baseFontSize};
  font-weight: ${(props) => props.theme.normalFontWeight};
  text-align: left;
  cursor: pointer;
`;
// url은 useparams로 불러오기

export default function Modal({ isModal, type, commentId }) {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const deletePost = () => {
    postData("deletepost", id, "");
    // 삭제하면 홈으로 이동
    navigate("/home");
  };

  const editPost = () => {
    postData("editpost", id, "");
  };

  // type, url, setPostData, comment, id, commentId
  const postReport = () => {
    postData("postReport", id, setMessage);
    const { report } = { ...message };

    alert(` ${report.post} 게시물 신고가 완료 되었습니다.`);
  };

  const commentReport = (e) => {
    postData("commentReport", id, setMessage, "", "", commentId);
    const { report } = { ...message };

    alert(`${report.post} 댓글 신고가 완료 되었습니다.`);
  };
  const ModalUI = {
    myprofile: (
      <ul>
        <ModalLi>설정 및 개인정보</ModalLi>
        <ModalLi>로그아웃</ModalLi>
      </ul>
    ),
    myprofilepost: (
      <ul>
        <ModalLi>게시물 고정하기</ModalLi>
        <ModalLi>게시글 삭제하기</ModalLi>
        <ModalLi>게시글 수정하기</ModalLi>
      </ul>
    ),
    mycomment: (
      <ul>
        <ModalLi onClick={deletePost}>삭제</ModalLi>
      </ul>
    ),
    mypost: (
      <ul>
        <ModalLi onClick={editPost}>수정</ModalLi>
        <ModalLi onClick={deletePost}>삭제</ModalLi>
      </ul>
    ),
    otherpost: (
      <ul>
        <ModalLi onClick={postReport}>게시물 신고하기</ModalLi>
      </ul>
    ),
    othercomment: (
      <ul>
        <ModalLi onClick={commentReport}>댓글 신고하기</ModalLi>
      </ul>
    ),
  };

  return (
    <section>
      <h2 className="sr-only">게시글 삭제 수정모달창</h2>
      <ModalDiv isModal={isModal}>
        <img src={ModalImage} alt="모달창 아이콘" />
        <>{ModalUI[type]}</>
      </ModalDiv>
    </section>
  );
}
