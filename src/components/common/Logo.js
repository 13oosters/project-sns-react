import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/image/logo-login.png";

const LogoImage = styled.img`
  margin-bottom: 9.4rem;
`;

export default function Logo() {
  return <LogoImage src={logoImage} alt="멍하냥" />;
}
