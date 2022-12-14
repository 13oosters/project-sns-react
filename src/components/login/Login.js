import React from "react";
import styled from "styled-components";

import Button from "../style/Button";
import kakaoLogo from "../../assets/image/logo-kakaotalk.png";
import googleLogo from "../../assets/image/logo-google.png";

const LoginButton = styled(Button)`
  display: block;
  font-size: ${(props) => props.theme.baseFontSize};
  color: #000000;
  background-color: #ffffff;
  background: ${(props) => `url(${props.image})`} no-repeat 15px center;
  border: 1px solid #c5985e;
`;

export default function Login() {
  return (
    <>
      {/* 로그인 디자인 작업2 */}
      {/* 로그인작업3*/}

      {/* yumbun 2일차 작업 진행 (두번째 체크리스트 작업)*/}
      <ul>
        {/* 준근 기능 추가 2 */}
        <li>
          <LoginButton image={kakaoLogo} as="a" href="#;">
            카카오 계정으로 로그인
          </LoginButton>
        </li>
        <li>
          <LoginButton image={googleLogo} as="a" href="#;">
            구글 계정으로 로그인
          </LoginButton>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#;">이메일로 로그인</a>
        </li>
        <li>
          <a href="#;">회원가입</a>
        </li>
      </ul>
      {/* yubmun 2일차 작업 진행 (첫번째 체크리스트 작업) */}
    </>
  );
}
// 소영 테스트
// 소영 테스트 2
// 소영 테스트 3
// 소영 테스트 4
