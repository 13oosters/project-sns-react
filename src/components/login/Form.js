import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../style/Button";
import LayoutSection from "../style/PageLayout";

export const FormH2 = styled.h2`
  font-size: ${(props) => props.theme.xxLargeFontSize};
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const LoginFormP = styled.p`
  color: #767676;
  font-size: 1.2rem;
  width: 100%;
  text-align: left;
`;

export const LoginFormInput = styled.input`
  width: 100%;
  padding: 0.9rem 0;
  border-bottom: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  }
  &::placeholder {
    color: #dbdbdb;
  }
`;
export const LoginFormButton = styled(Button)`
  margin-top: 1.4rem;
  margin-bottom: 2rem;
  background-color: ${(props) => props.color};
  `;

const SignUpButton = styled.button`
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;
  font-weight: 400;
`;

export default function Form({ title, buttonText }) {
  const {
    register,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  const navigate = useNavigate();

  const clickNext = () => {
    if (buttonText === "다음") {
      navigate("/login/profile-setting");
    }
  };

  const [isValue, setIsValue] = useState(false);

  console.log(isValue);

  const checkIsValue = (e) => {
    e.target.value && watch(e.target.type) ? setIsValue(true) : setIsValue(false);
  }





  return (
    <>
      <LayoutSection paddingValue={3.4} backgroundColor={"#ffffff"}>
        <FormH2>{title}</FormH2>
        <LoginForm onSubmit={()=>{event.preventDefault();}}>
          <label>
            <LoginFormP>이메일</LoginFormP>
            {title === "로그인" ? (
              <LoginFormInput
                type="email"
                required
                placeholder="이메일 주소를 입력해주세요"
                {...register("email", {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
                onChange={checkIsValue}
              />
            ) : (
              <LoginFormInput
                type="email"
                required
                placeholder="이메일 주소를 입력해주세요"
                {...register("email", {})}
              />
            )}
            {errors.email && <small role="alert">{errors.email.message}</small>}
          </label>
          <label>
            <LoginFormP>비밀번호</LoginFormP>
            <LoginFormInput
              type="password"
              required
              placeholder="비밀번호를 설정해 주세요"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                pattern: {
                  value: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/i,
                  message: "비밀번호 형식에 맞지 않습니다. 8자 이상이어야 합니다.",
                },
              })}
              onChange={checkIsValue}
            />
            {errors.password && <small role="alert">{errors.password.message}</small>}
          </label>
          <LoginFormButton type="submit" disabled={isSubmitting} onClick={clickNext}>{buttonText}</LoginFormButton>
        </LoginForm>
        {title === "로그인" ? (
          <SignUpButton
            type="button"
            onClick={() => {
              navigate("/login/sign-up");
            }}
          >
            이메일로 회원가입
          </SignUpButton>
        ) : null}
      </LayoutSection>
    </>
  );
}
