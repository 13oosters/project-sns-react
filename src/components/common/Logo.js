import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/image/logo-login.png";
import SplashLogoImage from "../../assets/image/logo-splash.png";

const LogoImg = styled.img`
  margin-top: ${(props) => props.marginTop}rem;
  transform: translateX(-4%);
`;

export default function Logo(props) {
  if(props.name === "login") {
    return <LogoImg src={LogoImage} marginTop={7.3}/>
  } else if (props.name === "splash"){
    return <LogoImg src={SplashLogoImage} marginTop={20}/>
  }
}
