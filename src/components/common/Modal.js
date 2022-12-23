import React from "react";
import styled from "styled-components";

import 임시홈 from "../../pages/임시홈";
import ModalImage from "../../assets/image/icon-modal.png";

const ModalDiv = styled.div`
  display: ${(props) => (!props.isModal ? "none" : "block")};
  width: 100%;
  position: fixed;
  bottom: 0;
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
`;

export default function Modal({ isModal }) {
  return (
    <section>
      <h2 className="sr-only">게시글 삭제 수정모달창</h2>
      <ModalDiv isModal={isModal}>
        <img src={ModalImage} alt="모달창 아이콘" />
        <ul>
          <ModalLi>삭제</ModalLi>
          <ModalLi>수정</ModalLi>
        </ul>
      </ModalDiv>
      <임시홈 />
    </section>
  );
}
