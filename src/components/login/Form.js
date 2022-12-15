import React from "react";
import styled from "styled-components";
import Button from "../style/Button";
import LayoutSection from "../style/PageLayout";

const FormH2 = styled.h2`
  font-size: ${(props) => props.theme.xxLargeFontSize};
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const LoginFormP = styled.p`
  color: #767676;
  font-size: 1.2rem;
  width: 100%;
  text-align: left;
`;

const LoginFormInput = styled.input`
  width: 100%;
  padding: 0.9rem 0;
  border-bottom: 1px solid #dbdbdb;
  &:focus{
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  }
`
const LoginFormButton = styled(Button)`
  margin-top: 1.4rem;
  margin-bottom: 2rem;
`
const SignUpButton = styled.button`
  color: #767676;
  font-size: 1.2rem;
  font-weight: 400;
`

export default function Form({ title, buttonText }) {
  return (
    <>
      <LayoutSection paddingValue={3.4} backgroundColor={"#ffffff"}>
        <FormH2>{title}</FormH2>
        <LoginForm method="post" action="#;">
          <label>
            <LoginFormP>이메일</LoginFormP>
            <LoginFormInput
              type="email"
              required
              placeholder="이메일 주소를 입력해주세요"
            />
          </label>
          <label>
            <LoginFormP>비밀번호</LoginFormP>
            <LoginFormInput
              type="password"
              required
              placeholder="비밀번호를 설정해 주세요"
            />
          </label>
          <LoginFormButton>{buttonText}</LoginFormButton>
        </LoginForm>
        {title === "로그인" ? <SignUpButton type="button">이메일로 회원가입</SignUpButton> : null}
      </LayoutSection>
    </>
  );
}
