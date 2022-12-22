import React from "react";
import styled from "styled-components";
import FollowerCount from "./FollowerCount";
import FollowingCount from "./FollowingCount";
import ProfileImage from "../../assets/image/basic-profile-img.png";
import MyProfileButton from "./MyProfileButton";

const InformationWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0 2.6rem;
  box-sizing: border-box;
  border-bottom: 2px solid ${(props) => props.theme.lightColor};
  height: 31.4rem;
`;

const InformationTopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.7rem;
  margin-bottom: 1.5rem;
`;

const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
`;

const ImformationP = styled.p`
  font-size: ${(props) => props.theme.largeFontSize};
  font-weight: 700;
`;

const InformationSpan = styled.span`
  font-size: ${(props) => props.theme.smallFontSize};
  color: ${(props) => props.theme.darkLightColor};

  &::before {
    content: "@ ";
  }
`;

const UploadImage = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
`;

const IntroduceP = styled.p`
  margin: 0.9rem 0 2.4rem;
  font-size: ${(props) => props.theme.baseFontSize};
  color: ${(props) => props.theme.darkLightColor};
`;

export default function ProfileInformation() {
  return (
    <InformationWrapDiv>
      <InformationTopDiv>
        <FollowerCount />
        <UploadImage
          src={ProfileImage}
          alt="프로필 사진"
          style={{ objecFit: "cover" }}
        />
        <FollowingCount />
      </InformationTopDiv>
      <InformationDiv>
        <ImformationP>호박이</ImformationP>
        <InformationSpan>hobak2</InformationSpan>
        <IntroduceP>안녕하세요 :&#41; 턱시도 젠틀냥 호박이입니다.</IntroduceP>
        <MyProfileButton>프로필 수정</MyProfileButton>
      </InformationDiv>
    </InformationWrapDiv>
  );
}
