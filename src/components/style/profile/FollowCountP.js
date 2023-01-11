import styled from "styled-components";

const FollowCountP = styled.p`
  display: block;
  font-size: ${(props) => props.theme.xLargeFontSize};
  font-weight: 700;
  line-height: 2.3rem;
  margin-bottom: 0.6rem;
  color: ${(props) =>
    props.type === "follows"
      ? props.theme.darkColor
      : props.theme.darkLightColor};
`;

export default FollowCountP;
