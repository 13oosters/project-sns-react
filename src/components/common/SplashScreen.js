import React from "react";
import styled from "styled-components";

import splashImage from "../../assets/image/logo-splash.png";

const SplashArticle = styled.article`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.primaryColor};
`;

export default function SplashScreen() {
  return (
    <SplashArticle>
      <h1 className="sr-only">멍하냥 로딩 화면</h1>
      <img src={splashImage} alt="멍하냥 로고" />
    </SplashArticle>
  );
}
