import styled from "styled-components";
import Button from "../Button";

const SignUpButton = styled(Button)`
  color: ${(props) => props.theme.darkLightColor};
  font-size: ${(props) => props.theme.smallFontSize};
`;

export default SignUpButton;
