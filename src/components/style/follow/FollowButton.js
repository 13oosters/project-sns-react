import styled from "styled-components";
import Button from "../Button";

const FollowButton = styled(Button)`
  width: 5.6rem;
  height: 2.8rem;
  margin: 1.1rem 0;
  font-size: ${(props) => props.theme.smallFontSize};
  line-height: 1.5rem;
  padding: 0.7rem 0;
  box-sizing: border-box;
`;

export default FollowButton;
