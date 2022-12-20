import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";

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

const UploadImg = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
`;

export default function ProfileSetting({ title, userData, setUserData }) {
  const [isValue, setIsValue] = useState(false);
  const [responseMessage, setResponseMeassage] = useState("");
  const [profileImage, setProfileImage] = useState(DefaultProfileImage);

  const navigate = useNavigate();

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
    // console.log(isValue);
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    checkIsValue(e);
  };

  const validateAccountName = async () => {
    try {
      const res = await API.post("/user/accountnamevalid", {
        user: { accountname: userData.accountname },
      });
      const { message } = await res.data;

      setResponseMeassage(message);
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    // e.preventDefault();
    if (title === "프로필 설정") {
      validateAccountName();
      if (!errors.name && !errors.userId) {
        if (responseMessage === "사용 가능한 계정 ID 입니다.") {
          // setUserData({ ...userData, [e.target.name]: e.target.value });
          axios
            .post("https://mandarin.api.weniv.co.kr/user", {
              user: { ...userData },
            })
            .then((res) => {
              console.log(res.data);
            });
          navigate("/settings");
        }
      }
    } else {
      console.log("프로필 수정");
    }
  };

  const getImage = async (e) => {
    const form = new FormData();

    console.log(e.target.files[0]);

    form.append("image", e.target.files[0]);

    console.log(form);

    const response = await axios.post(
      "https://mandarin.api.weniv.co.kr/image/uploadfile",
      form,
    );

    console.log(response);

    const data = await response.data;

    console.log(data);

    setUserData({
      ...userData,
      [e.target.name]: `https://mandarin.api.weniv.co.kr/${data.filename}`,
    });
    setProfileImage(userData.image);

    //    console.log(data);
  };

  // "image": String // 예시) https://mandarin.api.weniv.co.kr/1641906557953.png
  return (
    <>
      {title === "프로필 설정" ? (
        <>
          <TitleH2>{title}</TitleH2>
          <ContentP>나중에 언제든지 변경할 수 있습니다.</ContentP>
        </>
      ) : null}
      <ProfileLabel htmlFor="image">
        <input
          type="file"
          id="image"
          name="image"
          style={{ display: "none" }}
          onChange={getImage}
        />
        <UploadImageDiv>
          <UploadImg
            src={`${profileImage}`}
            alt="프로필 사진"
            style={{ objecFit: "cover" }}
          />
        </UploadImageDiv>
      </ProfileLabel>

      <LoginForm onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="username">
          사용자 이름
          <LoginInput
            type="text"
            name=" username"
            id=" username"
            required
            placeholder="2~10자 이내 한글만 사용 가능합니다."
            {...register("name", {
              required: "사용자 이름은 필수 입력입니다.",
              minLength: {
                value: 2,
                message: "2~10자 이내여야 합니다.",
              },
              maxLength: {
                value: 10,
                message: "2~10자 이내여야 합니다.",
              },
              pattern: {
                value: /^[가-힣]*$/g,
                message: "사용자이름 형식에 맞지 않습니다.",
              },
            })}
            onKeyUp={handleInput}
          />
        </label>
        <ErrorMessageP>{errors.name && errors.name.message}</ErrorMessageP>
        <label htmlFor="accountname" style={{ marginTop: "1.6rem" }}>
          계정 ID
          <LoginInput
            type="text"
            name="accountname"
            id="accountname"
            required
            placeholder="4~12자 이내 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            {...register("userId", {
              required: "계정ID는 필수 입력입니다.",
              minLength: {
                value: 4,
                message: "4~12자 이내여야 합니다.",
              },
              maxLength: {
                value: 12,
                message: "4~12자 이내여야 합니다.",
              },
              pattern: {
                value: /^[a-zA-Z0-9._]/g,
                message: "계정ID 형식에 맞지 않습니다.",
              },
            })}
            onKeyUp={handleInput}
          />
        </label>
        <ErrorMessageP>{errors.userId && errors.userId.message}</ErrorMessageP>
        <label htmlFor="intro" style={{ marginTop: "1.6rem" }}>
          소개
          <LoginInput
            type="text"
            name="intro"
            id="intro"
            placeholder="당신과 반려동물에 대해 소개해 주세요!"
            onKeyUp={handleInput}
          />
        </label>
        <LoginButton type="submit" disabled={isSubmitting} isValue={isValue}>
          {title === "프로필 설정" ? "멍하냥 시작하기" : "저장"}
        </LoginButton>
      </LoginForm>
    </>
  );
}
