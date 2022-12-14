import styled from "styled-components";

/* 
disable 상태랑
cancle 상태

background-color: ${(props) => props.disable? "red" : props.cancle? "blue" : black}

*/

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
  color: ${(props) => (props.cancel ? "#767676" : "#FFFFFF")};
  font-size: ${(props) => props.theme.baseFontSize};
  border: ${(props) => (props.cancel ? "1px solid #dbdbdb" : "none")};
`;

export default Button;
