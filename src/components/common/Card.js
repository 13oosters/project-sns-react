import React from "react";
import styled from "styled-components";

import profileImage from "../../assets/image/basic-profile-img-post.png";
import ModalButtonImage from "../../assets/image/icon-more-post.png";
import heartImage from "../../assets/image/icon-heart.png";
import commentsImage from "../../assets/image/icon-Comments.png";
import PostMainImage from "../../assets/image/image-post임시.png";

const CardTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;
const UserInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
`;
const UserNameStrong = styled.strong`
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
`;
const UserIdP = styled.p`
  display: block;
  margin-top: 0.4rem;
  &::before {
    content: "@";
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 23rem;
  // 임시 border
  border: 1px solid black;
`;

const ButtonUl = styled.ul`
  display: flex;
  margin-top: 1rem;
  padding: 0 2.4rem;
  gap: 2rem;
`;
const Buttonli = styled.li`
  display: inherit;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const NumberSpan = styled.span`
  font-size: ${(props) => props.theme.smallFontSize};
  color: ${(props) => props.theme.darkLightColor};
`;
const PostCommentP = styled.p`
  text-align: left;
  margin-top: 0.8rem;
  padding: 0 2.4rem;
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
`;

const PostTime = styled.time`
  display: block;
  margin-top: 1rem;
  padding: 0 2.4rem;
  font-size: ${(props) => props.theme.xSmallFontSize};
`;

export default function Card({ setIsModal }) {
  return (
    <li style={{ listStyle: "none" }}>
      <CardTopDiv>
        <UserInfoDiv>
          {/** 이미지 슬라이드 기능 */}
          <img src={profileImage} alt="유저 프로필 사진" />
          <UserNameDiv>
            <UserNameStrong>호박이</UserNameStrong>
            <UserIdP>hobak2</UserIdP>
          </UserNameDiv>
        </UserInfoDiv>
        {/* 자신의 프로필일 때만 */}
        <button
          type="button"
          onClick={() => {
            setIsModal((prev) => !prev);
          }}
        >
          <img src={ModalButtonImage} alt="수정,삭제 모달창 버튼" />
        </button>
      </CardTopDiv>
      <PostImage src={PostMainImage} alt="게시글 이미지" />
      <ButtonUl>
        <Buttonli>
          <button type="button" style={{ padding: 0, height: "2rem" }}>
            <img src={heartImage} alt="게시글 좋아요 버튼" />
          </button>
          <NumberSpan>59</NumberSpan>
        </Buttonli>
        <Buttonli>
          <a href="#;">
            <img src={commentsImage} alt="게시글 댓글 버튼" />
          </a>
          <NumberSpan>3</NumberSpan>
        </Buttonli>
      </ButtonUl>
      <PostCommentP>
        집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나,
        제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의
        코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도? 집사의 코딩을 방해하는 나, 제법 귀여울지도? 집사의 코딩을
        방해하는 나, 제법 귀여울지도? 집사의 코딩을 방해하는 나, 제법
        귀여울지도?
      </PostCommentP>
      <PostTime datetime="2022-12-05">
        <span>2022년</span> <span>12월</span> <span>5일</span>
      </PostTime>
    </li>
  );
}
