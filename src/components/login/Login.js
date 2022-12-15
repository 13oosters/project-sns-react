import React from "react";
import styled from "styled-components";
import Button from "../style/Button";
<<<<<<< HEAD
import kakaoLogo from "../../assets/image/logo-kakaotalk.png"
import googleLogo from "../../assets/image/logo-google.png"
=======
import kakaoLogo from "../../assets/image/logo-kakaotalk.png";
import googleLogo from "../../assets/image/logo-google.png";
>>>>>>> 2c1b70b178e4a01dfef6f572b959f1c50c8b04b1

const LoginButton = styled(Button)`
  display: block;
  width: 100%;
  border-radius: 4.4rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.baseFontSize};
  color: #000000;
  background: url(${(props) => props.image}) no-repeat 15px center #ffffff;
  border: 1px solid ${(props) => props.theme.primaryColor};
`;

const LoginDiv = styled.div`
  margin-top: 9.4rem;
  background-color: #fffaee;
  width: 39rem;
  height: 31.9rem;
`;

// ${(props) => (props.cancel ? "#767676" : "#FFFFFF")};

export default function Login() {
  return (
    <>
<<<<<<< HEAD
      <ul>
        <li>
          <LoginButton image={kakaoLogo} as="a">카카오 계정으로 로그인</LoginButton>
        </li>
        <li>
          <LoginButton image={googleLogo} as="a">구글 계정으로 로그인</LoginButton>
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
=======
      <LoginDiv>
        <ul>
          <li>
            <LoginButton image={kakaoLogo} as="a">
              카카오 계정으로 로그인
            </LoginButton>
          </li>
          <li>
            <LoginButton image={googleLogo} as="a">
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
      </LoginDiv>
>>>>>>> 2c1b70b178e4a01dfef6f572b959f1c50c8b04b1
    </>
  );
}
