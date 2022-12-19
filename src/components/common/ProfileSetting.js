import React from "react";
import styled from "styled-components";

import TitleH2 from "../style/form/TitleH2";
import LoginForm from "../style/form/LoginForm";
import LoginInput from "../style/form/LoginInput";
import LoginButton from "../style/form/LoginButton";
import UpLoadImage from "../src/assets/file-upload-button.png";

const profileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &::after {
    background: url({UpLoadImage});
  }
`;

export default function ProfileSetting({ title }) {
  return (
    <>
      {title === "프로필 설정" ? (
        <>
          <TitleH2>{title}</TitleH2>
          <p>나중에 언제든지 변경할 수 있습니다.</p>
        </>
      ) : null}
      <profileDiv>
        <input type="file" />
        <img src="" alt="넣어주세요" />
      </profileDiv>
      <LoginForm method="post" action="#;">
        <label>
          사용자 이름
          <LoginInput
            type="text"
            required
            placeholder="2~10자 이내여야 합니다."
          />
        </label>
        <label>
          계정 ID
          <LoginInput
            type="text"
            required
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          />
        </label>
        <label>
          소개
          <LoginInput
            type="text"
            placeholder="당신과 반려동물에 대해 소개해 주세요!"
          />
        </label>
        <LoginButton>
          {title === "프로필 설정" ? "멍하냥 시작하기" : "저장"}
        </LoginButton>
      </LoginForm>
    </>
  );
}
