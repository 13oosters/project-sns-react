import React from "react";
import styled from "styled-components";

import Header from "../components/style/Header";
import Detail from "../components/post/Detail";
import ModalImage from "../assets/image/icon-modal.png";

const ModalDiv = styled.div`
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1.6rem 0 1rem 2.6rem;
  text-align: center;
`;

const ModalLi = styled.li`
  padding: 1.4rem 2.6rem;
  font-size: ${(props) => props.theme.baseFontSize};
  font-weight: ${(props) => props.theme.normalFontWeight};
  text-align: left;
`;

export default function PostPage() {
  return (
    <>
      <section>
        <h1 className="sr-only">게시글 상세보기</h1>
        <Header type="post" />
        <Detail />
      </section>
      <section>
        <h2 className="sr-only">게시글 삭제 수정모달창</h2>
        <ModalDiv>
          <img src={ModalImage} alt="모달창 아이콘" />
          <ul>
            <ModalLi>삭제</ModalLi>
            <ModalLi>수정</ModalLi>
          </ul>
        </ModalDiv>
      </section>
    </>
  );
}
