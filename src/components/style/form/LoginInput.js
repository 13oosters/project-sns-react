import styled from "styled-components";

const LoginInput = styled.input`
  display: block;
  width: 100%;
  border-bottom: 0.1rem solid ${(props) => props.theme.lightColor};
  padding: 1rem 0.4rem 0.4rem 0;
  &::placeholder {
    color: ${(props) => props.theme.lightColor};
    font-size: ${(props) => props.theme.baseFontSize};
  }
`;

export default LoginInput;
