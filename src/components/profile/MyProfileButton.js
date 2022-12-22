import styled from "styled-components";
import Button from "../Button";

const MyProfileButton = styled(Button)`
  margin: 2.5rem 0rem;
  background-color: #ffffff;
  align-items: center;
  /* justify-content: center; */
  width: 12rem;
  height: 3.4rem;
  /* line-height: 1.8rem; */
  border: 1px solid ${(props) => props.theme.lightColor};
  /* box-sizing: border-box; */
`;

export default MyProfileButton;
