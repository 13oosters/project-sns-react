import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import TitleH2 from "../style/form/TitleH2";
import LoginForm from "../style/form/LoginForm";
import LoginInput from "../style/form/LoginInput";
import LoginButton from "../style/form/LoginButton";
import SignUpButton from "../style/form/SignUpButton";
import ErrorMessageP from "../style/form/ErrorMessageP";

export default function Form({ title, buttonText, userData, setUserData }) {
  const [isValue, setIsValue] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
  } = useForm({ mode: "onChange" });

  const checkIsValue = (e) => {
    watch("password") && watch("email") && watch("password")
      ? setIsValue(true)
      : setIsValue(false);
    console.log(isValue);
    console.log(watch("password"));
  };

  const handleForm = (e) => {
    //    e.preventDefault();
    if (title === "로그인") {
      console.log(1);
    } else if (title === "이메일로 회원가입") {
      if (!errors.email && !errors.password) {
        navigate("/settings");
      }
    }
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    checkIsValue(e);
  };

  return (
    <>
      <TitleH2>{title}</TitleH2>
      <LoginForm onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="email">
          이메일
          <LoginInput
            id="email"
            type="email"
            name="email"
            required
            placeholder="이메일 주소를 입력해주세요"
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              /* email 정규식 수정해야 함 */
              pattern: {
                value: /\b[\w.-]+@[\w.-]+.\w{2,4}\b/gi,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
            onKeyUp={handleInput}
          />
          <ErrorMessageP>{errors.email && errors.email.message}</ErrorMessageP>
        </label>
        <label htmlFor="password" style={{ marginTop: "1.6rem" }}>
          비밀번호
          <LoginInput
            id="password"
            type="password"
            name="password"
            required
            placeholder="비밀번호를 설정해 주세요"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              // 최소 8 자, 하나 이상의 문자와 하나의 숫자 정규식
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                message:
                  "비밀번호는 8글자 이상으로 하나 이상의 문자와 숫자를 포함해주세요.",
              },
            })}
            onKeyUp={handleInput}
          />
          <ErrorMessageP>
            {errors.password && errors.password.message}
          </ErrorMessageP>
        </label>
        <LoginButton
          type="submit"
          // onSubmit={passPage}
          disabled={isSubmitting}
          isValue={isValue}
        >
          {buttonText}
        </LoginButton>
      </LoginForm>
      {title === "로그인" ? (
        <SignUpButton type="button" onClick={() => navigate("/signin")} cancel>
          이메일로 회원가입
        </SignUpButton>
      ) : null}
    </>
  );
}

/**
 * 이메일로 회원가입 페이지일 때.
 * (다음) 버튼을 눌렀을 때.
 * 유효성 검사가 성공했으면.
 * /settings 페이지로 넘어간다.
 */
