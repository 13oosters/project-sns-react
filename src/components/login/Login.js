import React from "react";
import styled from "styled-components";

import Button from "../style/Button";
import kakaoLogo from "../../assets/image/logo-kakaotalk.png";
import googleLogo from "../../assets/image/logo-google.png";

const SecondaryColorDiv = styled.div`
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
  padding: 6rem 3.4rem 8.2rem;
  background-color: ${(props) => props.theme.sideColor};
`;

const LoginButton = styled(Button)`
  display: block;
  font-size: ${(props) => props.theme.baseFontSize};
  color: #000000;
  background: ${(props) => `url(${props.image})`} no-repeat 15px center;
  border: 1px solid #c5985e;
  background-color: #ffffff;
`;

export default function Login() {
  return (
    <SecondaryColorDiv>
      <ul>
        <li style={{ marginBottom: "2.5rem" }}>
          <LoginButton image={kakaoLogo} as="a" href="#;">
            카카오 계정으로 로그인
          </LoginButton>
        </li>
        <li style={{ marginBottom: "4.9rem" }}>
          <LoginButton image={googleLogo} as="a" href="#;">
            구글 계정으로 로그인
          </LoginButton>
        </li>
      </ul>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li style={{ marginRight: "1.2rem" }}>
          <a style={{ display: "flex" }} href="#;">
            <span>이메일로 로그인</span>
            <span style={{ marginLeft: "1.2rem", marginTop: "-0.1rem" }}>
              |
            </span>
          </a>
        </li>
        <li>
          <a href="#;">회원가입</a>
        </li>
      </ul>
    </SecondaryColorDiv>
  );
}
