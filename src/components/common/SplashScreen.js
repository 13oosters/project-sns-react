import React, { useEffect } from "react";
import styled from "styled-components";

import splashImage from "../../assets/image/logo-splash.png";

const SplashArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 500px;
  background-color: ${(props) => props.theme.secondaryColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default function SplashScreen({ setDidSplashScreenMount }) {
  const removeSplashScreen = () => {
    setDidSplashScreenMount(true);
  };

  useEffect(() => {
    window.addEventListener("keydown", removeSplashScreen);
    return () => {
      removeEventListener("keydown", removeSplashScreen);
    };
  });
  return (
    <SplashArticle onClick={removeSplashScreen}>
      <h1 className="sr-only">멍하냥 로딩 화면</h1>
      <img src={splashImage} alt="멍하냥 로고" />
    </SplashArticle>
  );
}
