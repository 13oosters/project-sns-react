import React from "react";
import styled from "styled-components";

import profileImage from "../../assets/image/basic-profile-img-post.png";
import ModalButtonImage from "../../assets/image/icon-more-post.png";

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
  margin-bottom: 0.2rem;
`;

export default function Card() {
  return (
    <li style={{ listStyle: "none" }}>
      <CardTopDiv>
        <UserInfoDiv>
          <img src={profileImage} alt="유저 프로필 사진" />
          <UserNameDiv>
            <UserNameStrong>호박이</UserNameStrong>
            <p>hobak2</p>
          </UserNameDiv>
        </UserInfoDiv>
        {/* 자신의 프로필일 때만 */}
        <button type="button">
          <img src={ModalButtonImage} alt="수정,삭제 모달창 버튼" />
        </button>
      </CardTopDiv>
      <img src="#" alt="#" />
      <ul>
        <li>
          <button type="button">
            <img src="#" alt="#" />
          </button>
          <span>59</span>
        </li>
        <li>
          <a href="#;">
            <img src="3" alt="#" />
          </a>
          <span>3</span>
        </li>
      </ul>
      <p>집사의 코딩을 방해하는 나, 제법 귀여울지도?</p>
      <time datetime="2022-12-05">
        <span>2022</span> <span>12</span> <span>5</span>
      </time>
    </li>
  );
}
