import React from "react";
import styled from "styled-components";
import modalButtonImage from "../../assets/image/icon-more-post.png";

const CommentLi = styled.li`
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
  return (
    <CommentLi>
      <CommentUserInfoDiv>
        <UserImage src={comment.author.image} alt="프로필 사진" />
        <UserNameStrong>{comment.author.accountname}</UserNameStrong>
        <CommentTime>5분 전</CommentTime>
        <ModalImage src={modalButtonImage} alt="댓글 수정 삭제 모달 버튼" />
      </CommentUserInfoDiv>
      <CommentP>{comment.content}</CommentP>
    </CommentLi>
  );
}

/* <CommentLi>
<CommentUserInfoDiv>
  <UserImage src={profileImage} alt="프로필 사진" />
  <UserNameStrong>앙리</UserNameStrong>
  <CommentTime>5분 전</CommentTime>
</CommentUserInfoDiv>
<CommentP>
  너 정말 앙큼한 고양이구나~!너 정말 앙큼한 고양이구나~!너 정말 앙큼한
  고양이구나~!너 정말 앙큼한 고양이구나~!너 정말 앙큼한 고양이구나~!너
  정말 앙큼한 고양이구나~!너 정말 앙큼한 고양이구나~!너 정말 앙큼한
  고양이구나~!너 정말 앙큼한 고양이구나~!너 정말 앙큼한 고양이구나~!너
  정말 앙큼한 고양이구나~!너 정말 앙큼한 고양이구나~!너 정말 앙큼한
  고양이구나~!너 정말 앙큼한 고양이구나~!너 정말 앙큼한 고양이구나~!너
  정말 앙큼한 고양이구나~!
</CommentP>
</CommentLi> */
