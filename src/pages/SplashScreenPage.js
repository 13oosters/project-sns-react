import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import splashImage from "../assets/image/logo-splash.png";

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0;
    visibility:hidden;
  }
`;

const SplashSection = styled.section`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 2s ease-in-out;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
`;

export default function SplashScreenPage() {
  const [showSplashScreenPage, setShowSplashScreenPage] = useState(true);

  console.log(showSplashScreenPage);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(3);
      setShowSplashScreenPage(false);
    }, 2000);

    return clearTimeout(timer);
  }, [showSplashScreenPage]);

  if (showSplashScreenPage) {
    return (
      <SplashSection>
        <h1 className="sr-only">멍하냥 로딩 화면</h1>
        <img src={splashImage} alt="멍하냥 로고" />
      </SplashSection>
    );
  } else return null;
}
