import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import API from "../../utils/api";
import defaultImage from "../../assets/image/basic-profile-img.png";
import validate from "../../utils/validate";
import TitleH2 from "../style/form/TitleH2";
import LoginForm from "../style/form/LoginForm";
import LoginInput from "../style/form/LoginInput";
import LoginButton from "../style/form/LoginButton";
import ErrorMessageP from "../style/form/ErrorMessageP";
import UpLoadImage from "../../../src/assets/image/profile-upload-button.png";

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

const UploadImage = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
`;

export default function ProfileSetting({ title, userData, setUserData }) {
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
    setFocus("username");
  }, []);

  const refineImageData = (filename) => {
    const url = filename.split(",");

    if (!filename) {
      return defaultImage;
    }

    if (url[0].includes("https://mandarin.api.weniv.co.kr")) {
      return url[0];
    } else {
      return `https://mandarin.api.weniv.co.kr/${url[0]}`;
    }
  };

  const checkIsValue = (e) => {
    e.target.value && watch("username") && watch("accountname")
      ? setIsValue(true)
      : setIsValue(false);
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    checkIsValue(e);
  };

  const handleForm = () => {
    if (title === "프로필 설정") {
      validate(userData, "accountname", "/user/accountnamevalid").then(
        (res) => {
          if (!errors.username && !errors.accountname) {
            if (res === "사용 가능한 계정ID 입니다.") {
              validate(userData, "signup", "/user")
                .then(() => {
                  alert("회원가입 성공");
                })
                .then(() => {
                  navigate("/login");
                });
            }
            if (res === "이미 가입된 계정ID 입니다.") {
              setResponseMeassage(res);
            }
          }
        },
      );
    } else {
      validate(userData, "accountname", "/user/accountnamevalid").then(
        (res) => {
          if (!errors.username && !errors.accountname) {
            if (res === "사용 가능한 계정ID 입니다.") {
              setResponseMeassage(res);
            }
            if (res === "이미 가입된 계정ID 입니다.") {
              setResponseMeassage(res);
            }
          }
        },
      );
    }
  };

  const uploadImage = async (e) => {
    const form = new FormData();

    form.append("image", e.target.files[0]);
    const response = await axios.post(
      "https://mandarin.api.weniv.co.kr/image/uploadfile",
      form,
    );

    const data = await response.data;

    setUserData({
      ...userData,
      [e.target.name]: `https://mandarin.api.weniv.co.kr/${data.filename}`,
    });
  };

  const editProfile = async () => {
    const res = await API.put(
      `/user`,
      {
        user: {
          username: userData.username,
          accountname: userData.accountname,
          intro: userData.intro,
          image: userData.image,
        },
      },
      {
        headers: {
          Authorization: "Bearer {token}",
          "Content-type": "application/json",
        },
      },
    );

    localStorage.setItem("accountname", userData.accountname);
    const accountname = localStorage.getItem("accountname");

    navigate(`/${accountname}`);
  };

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
          onChange={uploadImage}
        />
        <UploadImageDiv>
          <UploadImage
            src={refineImageData(userData.image)}
            alt="프로필 사진"
            style={{ objecFit: "cover" }}
          />
        </UploadImageDiv>
      </ProfileLabel>

      <LoginForm onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="username">
          사용자 이름
          <LoginInput
            defaultValue={userData.username}
            type="text"
            name="username"
            id="username"
            required
            placeholder="2~10자 이내 한글만 사용 가능합니다."
            {...register("username", {
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
        <ErrorMessageP>
          {errors.username && errors.username.message}
        </ErrorMessageP>
        <label htmlFor="accountname" style={{ marginTop: "1.6rem" }}>
          계정 ID
          <LoginInput
            defaultValue={userData.accountname}
            type="text"
            name="accountname"
            id="accountname"
            required
            placeholder="4~12자 이내 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            disabled={!title}
            {...register("accountname", {
              required: !title ? "" : "계정ID는 필수 입력입니다.",
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
        {responseMessage ? (
          <ErrorMessageP>{responseMessage}</ErrorMessageP>
        ) : (
          <ErrorMessageP>
            {errors.accountname && errors.accountname.message}
          </ErrorMessageP>
        )}
        <label htmlFor="intro" style={{ marginTop: "1.6rem" }}>
          소개
          <LoginInput
            defaultValue={userData.intro}
            type="text"
            name="intro"
            id="intro"
            placeholder="당신과 반려동물에 대해 소개해 주세요!"
            onKeyUp={handleInput}
          />
        </label>
        <LoginButton
          type="submit"
          disabled={isSubmitting}
          isValue={isValue}
          onClick={editProfile}
        >
          {title === "프로필 설정" ? "멍하냥 시작하기" : "저장"}
        </LoginButton>
      </LoginForm>
    </>
  );
}
