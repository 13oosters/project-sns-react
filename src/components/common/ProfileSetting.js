import React from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  FormH2,
  LoginForm,
  LoginFormButton,
  LoginFormInput,
  LoginFormP,
  ErrorMessageP,
} from "../login/Form";
import LayoutSection from "../style/PageLayout";
import basicProfileImage from "../../assets/image/basic-profile-img.png";
import profileUploadButton from "../../assets/image/profile-upload-button.png";

const ProfileSettingH2 = styled(FormH2)`
  margin-bottom: 1.2rem;
`;
const ProfileSettingP = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.theme.baseFontSize};
  margin-bottom: 3rem;
`;
const ProfileImageDiv = styled.div`
  position: relative;
`;
const ProfileImageLabel = styled.label`
  position: absolute;
  cursor: pointer;
  width: 3.6rem;
  height: 3.6rem;
  bottom: 0;
  right: 33%;
  background: url(${profileUploadButton}) no-repeat;
`;

const ProfileImageInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  left: -9999px;
`;

export default function ProfileSetting({ title }) {
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <LayoutSection paddingValue={3.4} backgroundColor={"#ffffff"}>
        {title === "프로필 설정" ? (
          <>
            <ProfileSettingH2>{title}</ProfileSettingH2>
            <ProfileSettingP>
              나중에 언제든지 변경할 수 있습니다.
            </ProfileSettingP>
          </>
        ) : null}
        <ProfileImageDiv>
          <img src={basicProfileImage} alt="넣어주세요" />
          <ProfileImageInput id="file" type="file" />
          <ProfileImageLabel htmlFor="file"></ProfileImageLabel>
        </ProfileImageDiv>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <label>
            <LoginFormP>사용자 이름</LoginFormP>
          </label>
          <LoginFormInput
            type="text"
            placeholder="2~10자 이내여야 합니다."
            {...register("userName", {
              required: "필수입력 사항입니다.",
              maxLength: {
                value: 10,
                message: "사용자 이름은 10자 이내여야 합니다.",
              },
            })}
          />
          {errors.userName && (
            <ErrorMessageP>*{errors.userName.message}</ErrorMessageP>
          )}
          <label>
            <LoginFormP>계정 ID</LoginFormP>
          </label>
          <LoginFormInput
            type="text"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            {...register("userId", {
              required: "필수입력 사항입니다.",
              maxLength: {
                value: 20,
                message: "계정 ID는 20자 이내여야 합니다.",
              },
              pattern: {
                value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,20}$/i,
                message:
                  "ID에는 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.",
              },
            })}
          />
          {errors.userId && (
            <ErrorMessageP>*{errors.userId.message}</ErrorMessageP>
          )}
          <label>
            <LoginFormP>소개</LoginFormP>
          </label>
          <LoginFormInput
            type="text"
            placeholder="당신과 반려동물에 대해 소개해 주세요!"
            {...register("introduction", {
              maxLength: { value: 30, message: "소개는 30자 이내여야 합니다." },
            })}
          />
          {errors.introduction && (
            <ErrorMessageP>*{errors.introduction.message}</ErrorMessageP>
          )}
          <LoginFormButton>
            {title === "프로필 설정" ? "멍하냥 시작하기" : "저장"}
          </LoginFormButton>
        </LoginForm>
      </LayoutSection>
    </>
  );
}
