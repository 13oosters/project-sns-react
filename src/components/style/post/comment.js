import styled from "styled-components";

const CommentLi = styled.li`
  padding: 2rem 1.6rem 0rem 1.6rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CommentUserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const UserImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`;

const UserNameStrong = styled.strong`
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
  margin-bottom: 0.2rem;
`;

const CommentTime = styled.span`
  font-size: ${(props) => props.theme.xSmallFontSize};
  color: ${(props) => props.theme.darkLightColor};
  flex-grow: 2;
`;

const CommentP = styled.p`
  padding-left: 4.8rem;
  padding-right: 1rem;
  font-size: ${(props) => props.theme.baseFontSize};
`;

const ModalImage = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export {
  CommentLi,
  CommentUserInfoDiv,
  UserImage,
  UserNameStrong,
  CommentTime,
  CommentP,
  ModalImage,
};
