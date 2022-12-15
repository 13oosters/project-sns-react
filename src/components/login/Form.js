import React from "react";
import styled from "styled-components";
import Button from "../style/Button";

const TitleH2 = styled.h2`
  margin-top: 3rem;
  font-size: 2.4rem;
  font-weight: ${(props) => props.theme.mediumFontWeight};
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  text-align: left;
`;
const LoginInput = styled.input`
  display: block;
  width: 100%;
  border-bottom: 0.1rem solid ${(props) => props.theme.lightColor};
  padding: 0.8rem 0;
  &::placeholder {
    color: ${(props) => props.theme.lightColor};
    font-size: ${(props) => props.theme.baseFontSize};
  }
`;

export default function Form({ title, buttonText }) {
  return (
    <>
      <TitleH2>{title}</TitleH2>
      <LoginForm method="post" action="#;">
        <label>
          이메일
          <LoginInput
            type="email"
            required
            placeholder="이메일 주소를 입력해주세요"
          />
        </label>
        <label style={{ marginTop: "1.6rem" }}>
          비밀번호
          <LoginInput
            type="password"
            required
            placeholder="비밀번호를 설정해 주세요"
          />
        </label>
        <Button type="submit" disable>
          {buttonText}
        </Button>
      </LoginForm>
      {title === "로그인" ? (
        <Button type="button" cancel>
          이메일로 회원가입
        </Button>
      ) : null}
    </>
  );
}
