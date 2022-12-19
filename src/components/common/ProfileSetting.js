import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import TitleH2 from "../style/form/TitleH2";
import LoginForm from "../style/form/LoginForm";
import LoginInput from "../style/form/LoginInput";
import LoginButton from "../style/form/LoginButton";
import ErrorMessageP from "../style/form/ErrorMessageP";
import UpLoadImage from "../../../src/assets/image/profile-upload-button.png";
import DefaultProfileImage from "../../../src/assets/image/basic-profile-img.png";

const ProfileLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto 0;
  width: 11rem;
  cursor: pointer;
`;

const UploadImageDiv = styled.div`
  position: relative;
  width: 11rem;
  height: 11rem;
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    background: url(${UpLoadImage});
  }
`;

const ContentP = styled.p`
  margin-top: 1.2rem;
  text-align: center;
  color: ${(props) => props.theme.darkLightColor};
`;

export default function ProfileSetting({ title, userData, setUserData }) {
  const [isValue, setIsValue] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
  } = useForm({ mode: "onChange" });

  const checkIsValue = (e) => {
    e.target.value && watch("name") && watch("userId")
      ? setIsValue(true)
      : setIsValue(false);
    console.log(isValue);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (title === "프로필 설정") {
      if (!errors.email && !errors.password) {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        //        navigate("/settings");
      }
    }
  };

  return (
    <>
      {title === "프로필 설정" ? (
        <>
          <TitleH2>{title}</TitleH2>
          <ContentP>나중에 언제든지 변경할 수 있습니다.</ContentP>
        </>
      ) : null}

      <ProfileLabel htmlFor="profileImage">
        <input type="file" id="profileImage" style={{ display: "none" }} />
        <UploadImageDiv>
          <img src={DefaultProfileImage} alt="프로필 사진" />
        </UploadImageDiv>
      </ProfileLabel>

      <LoginForm onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="profileName">
          사용자 이름
          <LoginInput
            type="text"
            name="profileName"
            id="profileName"
            required
            placeholder="2~10자 이내여야 합니다."
            {...register("name", {
              required: "사용자 이름은 필수 입력입니다.",
              pattern: {
                value: /[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g,
                message: "사용자이름 형식에 맞지 않습니다.",
              },
            })}
            onKeyUp={checkIsValue}
          />
        </label>
        <ErrorMessageP>{errors.name && errors.name.message}</ErrorMessageP>
        <label htmlFor="profileAccountName" style={{ marginTop: "1.6rem" }}>
          계정 ID
          <LoginInput
            type="text"
            name="profileAccountName"
            id="profileAccountName"
            required
            placeholder="4~12자 이내 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            {...register("userId", {
              required: "계정ID는 필수 입력입니다.",
              minlength: {
                value: /^[a-zA-Z0-9._]{4,12}$/g,
                message: "계정ID 형식에 맞지 않습니다.",
              },
            })}
            onKeyUp={checkIsValue}
          />
        </label>
        <ErrorMessageP>{errors.userId && errors.userId.message}</ErrorMessageP>
        <label htmlFor="profileIntro" style={{ marginTop: "1.6rem" }}>
          소개
          <LoginInput
            type="text"
            name="profileIntro"
            id="profileIntro"
            placeholder="당신과 반려동물에 대해 소개해 주세요!"
          />
        </label>
        <LoginButton type="submit" disabled={isSubmitting} isValue={isValue}>
          {title === "프로필 설정" ? "멍하냥 시작하기" : "저장"}
        </LoginButton>
      </LoginForm>
    </>
  );
}
