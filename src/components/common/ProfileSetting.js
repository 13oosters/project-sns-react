import React from "react";
import styled from "styled-components";
import {
  FormH2,
  LoginForm,
  LoginFormButton,
  LoginFormInput,
  LoginFormP,
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
        <LoginForm method="post" action="#;">
          <label>
            <LoginFormP>사용자 이름</LoginFormP>
            <LoginFormInput
              type="text"
              required
              placeholder="2~10자 이내여야 합니다."
            />
          </label>
          <label>
            <LoginFormP>계정 ID</LoginFormP>
            <LoginFormInput
              type="text"
              required
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            />
          </label>
          <label>
            <LoginFormP>소개</LoginFormP>
            <LoginFormInput
              type="text"
              placeholder="당신과 반려동물에 대해 소개해 주세요!"
            />
          </label>
          <LoginFormButton>
            {title === "프로필 설정" ? "멍하냥 시작하기" : "저장"}
          </LoginFormButton>
        </LoginForm>
      </LayoutSection>
    </>
  );
}
