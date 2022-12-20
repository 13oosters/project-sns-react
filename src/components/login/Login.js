import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <SecondaryColorDiv>
      <ul>
        <li style={{ marginBottom: "2.5rem" }}>
          <LoginButton image={kakaoLogo}>카카오 계정으로 로그인</LoginButton>
        </li>
        <li style={{ marginBottom: "4.9rem" }}>
          <LoginButton image={googleLogo}>구글 계정으로 로그인</LoginButton>
        </li>
      </ul>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li style={{ marginRight: "1.2rem" }}>
          <button
            type="button"
            style={{ display: "flex" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            <span>이메일로 로그인</span>
            <span style={{ marginLeft: "1.2rem", marginTop: "-0.1rem" }}>
              |
            </span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              navigate("/signin");
            }}
          >
            회원가입
          </button>
        </li>
      </ul>
    </SecondaryColorDiv>
  );
}
