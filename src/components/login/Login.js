import { useState } from "react";
import styled from "styled-components";
import Button from "../style/Button";
import kakaoLogo from "../../assets/image/logo-kakaotalk.png";
import googleLogo from "../../assets/image/logo-google.png";
import Form from "./Form";
import Logo from "../common/Logo";

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
  margin-bottom: 2.5rem;
`;

const LoginDiv = styled.div`
  margin-top: 9.4rem;
  background-color: #fffaee;
  width: 39rem;
  height: 100%;
  padding: 6rem 3.4rem;
  border-radius: 4rem 4rem 0 0;
`;

const LoginUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 4.9rem;
  font-size: 1.2rem;
`;

const LoginLi = styled.li`
  &::after {
    content: "|";
    margin: 0 1.3rem;
    color: #767676;
  }
  & button {
    color: #767676;
  }
`;

export default function Login() {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const loginButtonClick = () => {
    setIsEmailLogin(true);
  };

  const signUpButtonClick = () => {
    setIsSignUp(true);
  };

  if (!isEmailLogin && !isSignUp) {
    return (
      <>
        <Logo name="login" />
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
          <LoginUl>
            <LoginLi>
              <button type="button" onClick={loginButtonClick}>
                이메일로 로그인
              </button>
            </LoginLi>
            <li>
              <button
                type="button"
                onClick={signUpButtonClick}
                style={{ color: "#767676" }}
              >
                회원가입
              </button>
            </li>
          </LoginUl>
        </LoginDiv>
      </>
    );
  }

  if (isEmailLogin) {
    return <Form title="로그인" buttonText="로그인" />;
  }

  if (isSignUp) {
    return <Form title="이메일로 회원가입" buttonText="다음" />;
  }
}
