import React from "react";
import styled from "styled-components";

import Logo from "../common/Logo";
import Login from "./Login";

const PrimaryColorDiv = styled.div`
  padding: 7.3rem 0rem 0 0;
  text-align: center;
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
