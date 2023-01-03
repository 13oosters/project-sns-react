import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../style/Button";

const SecondaryColorDiv = styled.div`
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background-color: ${(props) => props.theme.sideColor};
`;

const LoginButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  padding: 2rem 0;
  font-size: ${(props) => props.theme.xLargeFontSize};
  color: #000000;
  background: ${(props) => `url(${props.image})`} no-repeat 15px center;
  border: 1px solid #c5985e;
  background-color: #ffffff;
`;

const LoginUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
`;

export default function Login() {
  const navigate = useNavigate();

  console.log("테스트 계정 -> 이메일 test1111@test.com , 비밀번호 test1111");

  return (
    <SecondaryColorDiv>
      <LoginUl>
        <li style={{ width: "90%" }}>
          <LoginButton
            type="button"
            onClick={() => {
              navigate("/login");
            }}
          >
            이메일로 로그인
          </LoginButton>
        </li>
        <li style={{ width: "90%" }}>
          <LoginButton
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </LoginButton>
        </li>
        <li>
          <p style={{ marginTop: "2rem", fontSize: "1.4rem" }}>13oosters🚀</p>
        </li>
      </LoginUl>
    </SecondaryColorDiv>
  );
}
