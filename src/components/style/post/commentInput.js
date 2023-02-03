import styled from "styled-components";

const WriteSection = styled.section`
  position: fixed;
  bottom: 0;
  width: 50rem;
  height: 8.8rem;
  display: flex;
  justify-content: left;
  align-items: center;
  // border-top: 1px solid ${(props) => props.theme.lightColor};
  padding: 1rem 1.2rem 0 1.2rem;
`;

const UserImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`;
const WritingForm = styled.form`
  display: inherit;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin-left: 1.8rem;
`;

const WritingTextarea = styled.textarea`
  width: 100%;
  overflow: hidden;
  margin: 1rem 0;
  border-radius: 1rem;
  padding: 1.5rem 0 0 1rem;
  &::placeholder {
    color: #c4c4c4;
  }
  &:focus {
    border-radius: 1rem;
    outline: 1px solid ${(props) => props.theme.darkLightColor};
    border-radius: 0.4rem;
  }
`;

const UpLoadButton = styled.button`
  width: 6rem;
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
  color: #c4c4c4;
  margin-left: 1rem;
  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export { WriteSection, UserImage, WritingForm, WritingTextarea, UpLoadButton };
