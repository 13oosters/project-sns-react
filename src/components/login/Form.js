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
`;

const LoginFormP = styled.p`
  color: #767676;
  font-size: 1.2rem;
`;

export default function Form({ title, buttonText }) {
  return (
    <>
      <LayoutSection paddingValue={3.4} backgroundColor={"#ffffff"}>
        <FormH2>{title}</FormH2>
        <LoginForm method="post" action="#;">
          <label>
            <LoginFormP>이메일</LoginFormP>
            <input
              type="email"
              required
              placeholder="이메일 주소를 입력해주세요"
            />
          </label>
          <label>
            <LoginFormP>비밀번호</LoginFormP>
            <input
              type="password"
              required
              placeholder="비밀번호를 설정해 주세요"
            />
          </label>
          <Button>{buttonText}</Button>
        </LoginForm>
        {title === "로그인" ? <a href="#;">이메일로 회원가입</a> : null}
      </LayoutSection>
    </>
  );
}
