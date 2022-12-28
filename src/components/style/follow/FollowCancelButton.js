import styled from "styled-components";
import Button from "../Button";

const FollowCancelButton = styled(Button)`
  width: 7rem;
  height: 2.8rem;
  margin: 1.1rem 0;
  font-size: ${(props) => props.theme.smallFontSize};
  line-height: 1.5rem;
  color: ${(props) => props.cancel};
  background-color: ${(props) => props.cancel};
  padding: 0.7rem 1.1rem;
  border: 0.1rem solid ${(props) => props.cancel};
  box-sizing: border-box;
`;

export default FollowCancelButton;
