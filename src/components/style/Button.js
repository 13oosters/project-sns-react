import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: ${(props) => {
    if (props.disable) {
      return props.theme.secondaryColor;
    } else if (props.cancel) {
      return "#ffffff";
    } else {
      return props.theme.primaryColor;
    }
  }};
  border-radius: 4.4rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  cursor: pointer;
  text-align: center;
  color: ${(props) => (props.cancel ? props.theme.lightColor : "#FFFFFF")};
  font-size: ${(props) => props.theme.baseFontSize};
  border: ${(props) =>
    props.cancel ? "1px solid props.theme.lightColor" : "none"};
`;

export default Button;
