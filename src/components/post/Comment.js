import React, { useState } from "react";
import styled from "styled-components";
import modalButtonImage from "../../assets/image/icon-more-post.png";
import Modal from "../common/Modal";

const CommentLi = styled.li`
  padding: 2rem 1.6rem 0rem 1.6rem;
  margin-bottom: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CommentUserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const UserImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`;

const UserNameStrong = styled.strong`
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
  margin-bottom: 0.2rem;
`;

const CommentTime = styled.span`
  font-size: ${(props) => props.theme.xSmallFontSize};
  color: ${(props) => props.theme.darkLightColor};
  flex-grow: 2;
`;

const CommentP = styled.p`
  padding-left: 4.8rem;
  font-size: ${(props) => props.theme.baseFontSize};
`;

const ModalImage = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export default function Comment({ comment }) {
  const [modal, isModal] = useState(false);
  const setModal = (e) => {
    isModal((prev) => !prev);
  };

  const commentTime = Math.round(
    (new Date().getTime() - Date.parse(comment.createdAt)) / 1000,
  );

  const getTime = () => {
    let time = "";

    if (commentTime < 60) {
      time = `몇초 전`;
    }
    if (commentTime > 60) {
      time = `${Math.round(commentTime / 60)}분 전`;
    }
    if (commentTime > 60 * 60) {
      time = `${Math.round(commentTime / (60 * 60))}시간 전`;
    }
    if (commentTime > 60 * 60 * 24) {
      time = `${Math.round(commentTime / (60 * 60 * 24))}일 전`;
    }

    return time;
  };

  return (
    <CommentLi>
      <CommentUserInfoDiv>
        <UserImage src={comment.author.image} alt="프로필 사진" />
        <UserNameStrong>{comment.author.accountname}</UserNameStrong>
        <CommentTime>{getTime()}</CommentTime>
        <ModalImage
          name={comment.id}
          src={modalButtonImage}
          alt="댓글 삭제 모달 버튼"
          onClick={setModal}
        />
      </CommentUserInfoDiv>
      <CommentP>{comment.content}</CommentP>
      <Modal isModal={modal} type="othercomment" commentId={comment.id} />
    </CommentLi>
  );
}
