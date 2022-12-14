import React from "react";
import styled from "styled-components"
import Button from "../style/Button";
import kakaoLogo from "../../assets/image/logo-kakaotalk.png"

const LoginButton = styled(Button)`
  display: block;
  width: 100%;
  border-radius: 4.4rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.baseFontSize};
  color: #000000;
  background: url(${kakaoLogo}) no-repeat 15px center #ffffff;
  border: 1px solid ${(props) => props.theme.primaryColor};
`;

export default function Login() {
  return (
    <>
      <ul>
        <li>
          <LoginButton as="a">카카오 계정으로 로그인</LoginButton>
        </li>
        <li>
          <a href="#;">구글 계정으로 로그인</a>
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
    </>
  );
}
