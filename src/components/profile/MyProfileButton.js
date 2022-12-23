import styled from "styled-components";
import Button from "../style/Button";

const MyProfileButton = styled(Button)`
  background-color: #ffffff;
  align-items: center;
  width: 12rem;
  height: 3.4rem;
  padding: 0;
  border: 1px solid ${(props) => props.theme.lightColor};
  color: ${(props) => props.theme.darkLightColor};
`;

export default MyProfileButton;
