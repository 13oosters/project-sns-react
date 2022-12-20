import styled from "styled-components";

const ErrorMessageP = styled.p`
  margin-top: 0.6rem;
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.smallFontSize};
`;

export default ErrorMessageP;
