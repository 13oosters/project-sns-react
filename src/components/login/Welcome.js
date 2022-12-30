import React from "react";
import styled from "styled-components";

import Logo from "../common/Logo";
import Login from "./Login";

const PrimaryColorDiv = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;

  height: 100%;
  background-color: ${(props) => props.theme.primaryColor};
`;

export default function Welcome() {
  return (
    <PrimaryColorDiv>
      <Logo />
      <Login />
    </PrimaryColorDiv>
  );
}
