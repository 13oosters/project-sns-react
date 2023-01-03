import styled from "styled-components";

const LayoutSection = styled.section`
  padding: 0 ${(props) => props.paddingValue}rem;
  margin: 0 auto;
  max-width: 500px;
  background-color: #ffffff;
  height: 100vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default LayoutSection;
