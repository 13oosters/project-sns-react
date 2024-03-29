import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import validate from "../../utils/validate";
import TitleH2 from "../style/form/TitleH2";
import LoginForm from "../style/form/LoginForm";
import LoginInput from "../style/form/LoginInput";
import LoginButton from "../style/form/LoginButton";
import SignUpButton from "../style/form/SignUpButton";
import ErrorMessageP from "../style/form/ErrorMessageP";

export default function Form({
  title,
  buttonText,
  userData,
  setUserData,
  setHasToken,
}) {
  const [isValue, setIsValue] = useState(false);
  const [responseMessage, setResponseMeassage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    setFocus("email");
  }, []);

  const checkIsValue = (e) => {
    e.target.value && watch("email") && watch("password")
      ? setIsValue(true)
      : setIsValue(false);
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    checkIsValue(e);
  };

  const handleForm = (e) => {
    if (title === "로그인") {
      validate(userData, "signin", "/user/login").then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("accountname", res.accountname);
          setHasToken(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);
          setResponseMeassage("");
        } else {
          setResponseMeassage(res);
        }
      });
    } else if (title === "이메일로 회원가입") {
      validate(userData, "email", "/user/emailvalid").then((res) => {
        if (res === "이미 가입된 이메일 주소 입니다.") {
          setResponseMeassage(res);
        } else {
          setResponseMeassage("");
        }
        if (!errors.email && !errors.password) {
          if (res === "사용 가능한 이메일 입니다.") {
            navigate("/settings");
          }
        }
      });
    }
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
              pattern: {
                value: /\b[\w.-]+@[\w.-]+.\w{2,4}\b/gi,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
            onKeyUp={handleInput}
          />
          {responseMessage ? (
            <ErrorMessageP>{responseMessage}</ErrorMessageP>
          ) : (
            <ErrorMessageP>
              {errors.email && errors.email.message}
            </ErrorMessageP>
          )}
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
        <LoginButton type="submit" disabled={isSubmitting} isValue={isValue}>
          {buttonText}
        </LoginButton>
      </LoginForm>
      {title === "로그인" ? (
        <SignUpButton
          type="button"
          onClick={() => {
            navigate("/signup");
            setResponseMeassage("");
          }}
          cancel
        >
          이메일로 회원가입
        </SignUpButton>
      ) : null}
    </>
  );
}
