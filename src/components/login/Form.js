// import { useEffect, useState } from "react";
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

const ErrorMessageP = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-size: 1.2rem;
  text-align: left;
  margin-top: -1rem;
`;

export default function Form({ title, buttonText }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const navigate = useNavigate();
  
  // const [isValid, setIsValid] = useState(true);


  console.log(watch("email"));


  const onSubmit = (data) => {
    console.log(data)
    if(title === '로그인'){
      navigate("/")
    }
    if(title === '이메일로 회원가입')
      navigate("/login/profile-setting");
  };

  return (
    <>
      <LayoutSection paddingValue={3.4} backgroundColor={"#ffffff"}>
        <FormH2>{title}</FormH2>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <label>
            <LoginFormP>이메일</LoginFormP>
          </label>
          {title === "로그인" ? (
            <LoginFormInput
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              {...register("email", {
                required: "필수입력 사항입니다",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "이메일 형식이 아닙니다",
                },
              })}
            />
          ) : (
            <LoginFormInput
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              {...register("email", {
                required: "필수입력 사항입니다",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "이메일 형식이 아닙니다",
                },
              })}
            />
          )}
          {errors.email && (
            <ErrorMessageP>*{errors.email.message}</ErrorMessageP>
          )}
          <label>
            <LoginFormP>비밀번호</LoginFormP>
          </label>
          <LoginFormInput
            type="password"
            placeholder="비밀번호를 설정해 주세요"
            {...register("password", {
              required: "비밀번호 입력은 필수 사항입니다",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i,
                message: "비밀번호 형식이 잘못되었습니다",
              },
              minLength: {
                value: 6,
                message: "비밀번호는 최소 6자 이상이어야 합니다",
              }
            })}
          />
          {errors.password && (
            <ErrorMessageP>*{errors.password.message}</ErrorMessageP>
          )}
          <LoginFormButton
            type="submit"
            disabled={isSubmitting}
          >
            {buttonText}
          </LoginFormButton>
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
